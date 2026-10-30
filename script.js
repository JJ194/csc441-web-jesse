// Class 15: Step 1: This file is running.
console.log("Script.js is running.")

//Class 15: Step 2a: Put this year in the footer.
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Lab 15: Task 5: Back to the top
const backTop = document.getElementById("backTop");
if (backTop) {
    backTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}



// Class 15: Step 3: A button that changes the page.
const themeButton = document.querySelector("#theme-toggle");

// Lab 15: Task 3: The button says what it will do.
if (themeButton) {
    // Lab 15: Task 4: Keep the saved choice after refresh.
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }
    // Lab 15: Task: 3 & 4: The label swaps, and the choice is remembered.
        themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }
    });
}

// Class 16: Step 4: Handle the submit //
const contactForm  = document.querySelector("#contact-form");

// Class 16: Step 4a: Handle the submit //
if (contactForm){
    const formStatus = document.querySelector("#form-status");
}
//const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const name = document.querySelector("#name").value;

    formStatus.textContent = "Thanks, " + name + ". Your message is ready to send!";
    contactForm.reset();
})
