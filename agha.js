const languageToggle = document.querySelector(".language-toggle");
const languageLabel = document.querySelector(".language-label");
const translatableElements = document.querySelectorAll("[data-en][data-ar]");

function setLanguage(language) {
    const isArabic = language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.dir = isArabic ? "rtl" : "ltr";

    languageLabel.textContent = isArabic ? "English" : "العربية";

    languageToggle.setAttribute(
        "aria-label",
        isArabic
            ? "Switch language to English"
            : "Switch language to Arabic"
    );

    languageToggle.setAttribute("aria-pressed", String(isArabic));

    translatableElements.forEach((element) => {
        element.textContent = isArabic
            ? element.dataset.ar
            : element.dataset.en;
    });

    // حفظ اللغة المختارة
    localStorage.setItem("aghaLanguage", language);
}

languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang;

    setLanguage(currentLanguage === "en" ? "ar" : "en");
});

// اللغة الافتراضية = العربية
const savedLanguage = localStorage.getItem("aghaLanguage") || "ar";

setLanguage(savedLanguage);

// السنة
document.querySelector("#year").textContent = new Date().getFullYear();
