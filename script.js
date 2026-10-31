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
const contactForm = document.querySelector("#contact-form");

// Class 16: Step 4a: Handle the submit //
if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    // LAb 16: Task 4: Save on a refresh
    if (localStorage.getItem("draft_name")) {
        document.querySelector("#name").value = localStorage.getItem("draft_name");
    }
    if (localStorage.getItem("draft_message")) {
        document.querySelector("#message").value = localStorage.getItem("draft_message");
    }

    // Lab 16: Task 1: My check before accepting
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (message.length < 10) {
            formStatus.textContent = "10 characters minimum please.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");
        formStatus.textContent = "Thank you " + name + ", your message is ready to send! Somebody will be in touch with you soon.";
        contactForm.reset();
    });
    // Lab 16: Task 2: Clear the error when it's fixed
    contactForm.addEventListener("input", function () {
        if (formStatus.classList.contains("error")) {
            formStatus.textContent = "";
            formStatus.classList.remove("error");
        }

        // Lab 16: Task 4: A task of my own; save on a closed tab that is reopened
        localStorage.setItem("draft_name", document.querySelector("#name").value);
        localStorage.setItem("draft_message", document.querySelector("#message").value);
    });
}
