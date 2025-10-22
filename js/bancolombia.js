const DEEP_LINK_IOS = "nflx://";
    const DEEP_LINK_ANDROID = "intent://open#Intent;scheme=netflix;package=com.netflix.mediaclient;end";
    const URL_ANDROID_STORE = "https://play.google.com/store/apps/details?id=com.netflix.mediaclient";
    const URL_IOS_STORE = "https://apps.apple.com/app/id363590051";

    function detectPlatform(){
      const ua = navigator.userAgent || navigator.vendor || "";
      if (/android/i.test(ua)) return "android";
      if (/iPad|iPhone|iPod/.test(ua)) return "ios";
      return "other";
    }

    function openApp(){
      const platform = detectPlatform();
      const now = Date.now();

      if (platform === "android") {
        window.location = DEEP_LINK_ANDROID;
        setTimeout(() => {
          if (Date.now() - now < 1500) window.location = URL_ANDROID_STORE;
        }, 1200);
      } 
      else if (platform === "ios") {
        // Safari solo permite abrir deep links tras interacción
        window.location = DEEP_LINK_IOS;
        // No se puede detectar fallo, así que el usuario usa el botón de fallback
      } 
      else {
        alert("Abre este enlace desde tu celular para probar la app.");
      }
    }