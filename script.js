(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function apply(theme) {
    var dark = theme === 'dark';
    root.dataset.theme = theme;
    toggle.setAttribute('aria-checked', dark ? 'true' : 'false');
    toggle.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
  }

  apply(root.dataset.theme === 'light' ? 'light' : 'dark');

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
