const translations = {
    swedish: {
        title: "title men på svenska",
        text1: "text text text men på svenska",
        text2: "text2 text2 text2 men på svenska"
    },

    english: {
        title: "title but in english",
        text1: "text text text but in english",
        text2: "text2 text2 text2 but in english"
    }
}

const elements = {
  title: document.querySelector('#container1 .title'),
  text1: document.querySelector('#container1 .text'),
  text2: document.querySelector('#container2 .text'),
};

let currentLang = "english"

function changeLanguage(lang) {
    console.log(translations)
    const translation = translations[lang]

    console.log(translation)

    elements.title.textContent = translation.title
    elements.text1.textContent = translation.text1
    elements.text2.textContent = translation.text2

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
