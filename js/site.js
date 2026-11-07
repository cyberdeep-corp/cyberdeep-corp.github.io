const siteNav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");

if (siteNav && navToggle) {
    const closeNavigation = () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        siteNav.classList.toggle("is-open", !isOpen);
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    });

    siteNav.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        const formData = new FormData(form);
        const recipient = form.dataset.recipient;
        const name = formData.get("name");
        const topic = formData.get("topic");
        const subject = `CyberDeep inquiry: ${topic}`;
        const body = [
            `Name: ${name}`,
            `Work email: ${formData.get("email")}`,
            `Organization: ${formData.get("organization") || "Not provided"}`,
            `Topic: ${topic}`,
            "",
            String(formData.get("message"))
        ].join("\n");
        const feedback = form.querySelector(".form-feedback");

        if (!recipient) {
            throw new Error("Contact form is missing its email recipient.");
        }

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        if (feedback) {
            feedback.textContent = "Your email app should open with a draft. The form does not send or store your message.";
        }
    });
});
