function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const timeDate = new Date();
        timeDate.setTime(timeDate.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + timeDate.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function themeButton() {
    const webApplication = document.body;
    const currentTheme = webApplication.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    webApplication.classList.replace(currentTheme, newTheme);
    setCookie("theme", newTheme, 365);
}
