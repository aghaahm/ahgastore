const languageToggle = document.querySelector(".language-toggle");
const languageLabel = document.querySelector(".language-label");
const translatableElements = document.querySelectorAll("[data-en][data-ar]");

function setLanguage(language) {
	const isArabic = language === "ar";

	document.documentElement.lang = isArabic ? "ar" : "en";
	document.documentElement.dir = isArabic ? "rtl" : "ltr";
	document.body.dir = isArabic ? "rtl" : "ltr";
	languageLabel.textContent = isArabic ? "English" : "العربية";
	languageToggle.setAttribute("aria-label", isArabic ? "Switch language to English" : "Switch language to Arabic");
	languageToggle.setAttribute("aria-pressed", String(isArabic));

	translatableElements.forEach((element) => {
		element.textContent = isArabic ? element.dataset.ar : element.dataset.en;
	});
}

languageToggle.addEventListener("click", () => {
	setLanguage(document.documentElement.lang === "en" ? "ar" : "en");
});

document.querySelector("#year").textContent = new Date().getFullYear();
