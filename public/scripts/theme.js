// Theme management - runs before paint to prevent flash
(function() {
  const THEME_KEY = 'crackbot-theme';
  const root = document.documentElement;

  function getInitialTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply immediately
  applyTheme(getInitialTheme());

  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Export for other scripts
  window.CrackbotTheme = {
    get: () => root.getAttribute('data-theme'),
    set: applyTheme,
    toggle: () => applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
  };
})();