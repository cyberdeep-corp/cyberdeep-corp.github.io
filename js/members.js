/* Small progressive enhancement for the members pages. */
(() => {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(year);
  });
})();
