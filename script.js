const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const themeToggler = document.getElementById("theme-toggler");
const calculator = document.querySelector(".calculator");

// Variables for theme
let isDarkMode = false;

// Toggle Dark Mode
themeToggler.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    calculator.classList.toggle("dark");
    themeToggler.textContent = isDarkMode ? "☀️" : "🌙";
});

// Button Click Handling
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (button.id === "clear") {
            display.value = "";
        } else if (button.id === "backspace") {
            display.value = display.value.slice(0, -1);
        } else if (button.id === "percent") {
            display.value = parseFloat(display.value) / 100;
        } else if (button.id === "equal") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});
