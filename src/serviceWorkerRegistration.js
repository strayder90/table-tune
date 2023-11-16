export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js", { scope: "/" });

      setInterval(() => updateServiceWorker(), 1000 * 60);

      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed (waiting)");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Service worker registration failed with ${error}`);
    }
  }
};

const updateServiceWorker = async () => {
  try {
    const reg = await navigator.serviceWorker.ready;
    console.log("checking for update");
    await reg.update();
    console.log("update complete");
  } catch (error) {
    console.error("Error updating service worker:", error);
  }
};
