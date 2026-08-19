(function () {
  // From tawk.to: Administration → Property → Chat Widget → copy embed URL IDs.
  var TAWK_PROPERTY_ID = '6a862874b56df5344af1b305';
  var TAWK_WIDGET_ID = '1k0e0s2a9';

  if (!TAWK_PROPERTY_ID || !TAWK_WIDGET_ID) return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  window.Tawk_API.onLoad = function () {
    window.Tawk_API.hideWidget();
  };

  var script = document.createElement('script');
  script.async = true;
  script.src =
    'https://embed.tawk.to/' + TAWK_PROPERTY_ID + '/' + TAWK_WIDGET_ID;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');

  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
})();
