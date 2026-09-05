(() => {
  try {
    const storedTheme = window.localStorage.getItem("site-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : (prefersDark ? "dark" : "light");
  } catch {
    document.documentElement.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
})();
