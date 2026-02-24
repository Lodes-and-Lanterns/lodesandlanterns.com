(function() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getTheme() {
    return localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
    localStorage.setItem('theme', theme);
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.textContent = theme === 'light' ? '☀️' : '💡';
    }
  }

  setTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.textContent = getTheme() === 'light' ? '☀️' : '💡';
      toggle.addEventListener('click', function() {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
