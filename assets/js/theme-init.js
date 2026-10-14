(() => {
  const root = document.documentElement;
  // Arms the scroll reveal: without this class every .reveal stays visible, so
  // a blocked or failed site.js still leaves a complete page.
  root.classList.add("js");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem("site-theme");
  } catch {
    // Storage can throw in private windows; the system theme is fine.
  }
  root.dataset.theme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : (prefersDark ? "dark" : "light");
})();
