// E2E wrapper around the real service worker — used only by
// packages/plugin-reminders/e2e/reminders-sw.test.ts. That suite registers THIS script
// at the same scope instead of sw.js; importScripts pulls in the real built
// worker, so its install/activate/message/notification handlers run verbatim
// inside this worker.
//
// Headless Chromium's static permission getter reads 'denied' in the worker
// too, even when the profile store holds the grant (no Playwright API can
// flip it — the page-side init script patches the same getter for the page).
// The real sw.js fire-time guard reads this getter, so patch it here so the
// handler runs.
//
// The second patched layer is registration.showNotification — the display hop
// headless Chromium refuses (no notification display service, so the call
// rejects even with the permission granted). The patch posts the call's exact
// arguments to all window clients before attempting the real call, letting
// the test assert what the REAL handler passed to the display layer.
try {
  Object.defineProperty(Notification, 'permission', {
    get: () => 'granted',
    configurable: true,
  })
} catch (err) {
  console.error('[e2e-sw-wrapper] Notification.permission patch failed:', err)
}
importScripts('/sw.js')

const proto = Object.getPrototypeOf(self.registration)
if (!proto.__reviveE2EPatched) {
  proto.__reviveE2EPatched = true
  const origShow = proto.showNotification
  proto.showNotification = function (title, options) {
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(clients => {
        for (const client of clients) {
          client.postMessage({ __reviveSwNotification: { title, options } })
        }
      })
    try {
      const real = origShow.call(this, title, options)
      return real.catch(() => undefined) // headless: no display service
    } catch (err) {
      return Promise.resolve(undefined)
    }
  }
}
