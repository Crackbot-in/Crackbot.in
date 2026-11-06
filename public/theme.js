// Theme: follows the device setting by default ("auto").
// Visitors can override it with the header button; the choice is kept in localStorage.
// Loaded synchronously in <head> so the page never flashes the wrong theme.
(function () {
  var KEY = 'theme';
  var MODES = ['auto', 'light', 'dark'];
  var LABELS = { auto: 'Theme: match device', light: 'Theme: light', dark: 'Theme: dark' };
  var root = document.documentElement;

  function read() {
    try {
      var v = localStorage.getItem(KEY);
      return MODES.indexOf(v) > -1 ? v : 'auto';
    } catch (e) {
      return 'auto';
    }
  }

  function apply(mode) {
    if (mode === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
  }

  apply(read());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    function sync(mode) {
      btn.setAttribute('data-mode', mode);
      btn.setAttribute('aria-label', LABELS[mode] + ' (click to change)');
      btn.setAttribute('title', LABELS[mode]);
    }
    sync(read());
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var next = MODES[(MODES.indexOf(read()) + 1) % MODES.length];
      try {
        if (next === 'auto') localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, next);
      } catch (e) {}
      apply(next);
      sync(next);
    });
  });
})();
