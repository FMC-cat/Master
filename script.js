document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.createElement("button");
    toggleThemeButton.textContent = "切換深色/淺色模式";
    document.body.prepend(toggleThemeButton);

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});
