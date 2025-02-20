document.addEventListener("alpine:init", () => {
  Alpine.data("themeToggler", () => ({
    dark: localStorage.getItem("dark") === "true", // Recupera el estado del tema desde localStorage
    toggleTheme() {
      this.dark = !this.dark; // Alterna entre true y false
      localStorage.setItem("dark", this.dark); // Guarda el estado en localStorage
      document.documentElement.classList.toggle("dark", this.dark); // Aplica la clase 'dark' al elemento <html>
    },
  }));
});
document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("dark") === "true";
  document.documentElement.classList.toggle("dark", isDarkMode);
});
