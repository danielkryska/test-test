// E2E wrapper around the real service worker — used only by
// platforms/desktop/e2e/reminders-sw.test.ts. That suite registers THIS script
// at the same scope instead of sw.js; importScripts pulls in the real built
// worker, so its install/activate/message/notification handlers run verbatim
// inside this worker.
//
// The only patched layer is registration.showNotification — the display hop
// headless Chromium refuses (no notification display service, so the call
// rejects even with the permission granted). The patch posts the call's exact
// arguments to all window clients before attempting the real call, letting
// the test assert what the REAL handler passed to the display layer.
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
