const translations = {
    swedish: {
        title: "title men på svenska",
        text: "text text text men på svenska"
    },

    english: {
        title: "title but in english",
        text: "text text text but in english"
    }
}

const elements = {
  title: document.querySelector('.container .title'),
  text: document.querySelector('.container .text'),
};

let currentLang = "english"

function changeLanguage(lang) {
    console.log(translations)
    const translation = translations[lang]

    console.log(translation)

    elements.title.textContent = translation.title
    elements.text.textContent = translation.text

    document.documentElement.lang = lang === 'swedish' ? 'sv' : 'en';
}

document.addEventListener('DOMContentLoaded', () => { // äfter sidan har laddats

    const icon = document.querySelector('.icon');
    icon.addEventListener('click', () => { // när flagga ikonen trycks händer detta

        const icon = document.querySelector('.icon');
        
        currentLang = currentLang === 'english' ? 'swedish' : 'english';

        changeLanguage(currentLang);

        icon.src = currentLang === 'english' ? 'uk.png' : 'sweden.png';
    });

});

changeLanguage(currentLang)
