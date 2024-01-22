const data = {
    "english": {
        "zakladka": "Go to subpage",
        "paragraf": "Alice has a cat",
        "test": "It is english"
        // "nazwa_klasy_w_html" : "tłumaczenie"
    },
    "polish": {
        "zakladka": "Przejdź do podstrony",
        "paragraf": "Ala ma kota",
        "test": "to jest polski"
    }
};

function changeLanguage(language){
    if (textTitle) {
        textTitle.textContent = data[language].zakladka;
    }
    
    if (textDesc) {
        textDesc.textContent = data[language].paragraf;
    }
    
    if (textTest) {
        textTest.textContent = data[language].test;
    }

    /* if (nazwa_elementu_w_js]) {
        nazwa_elementu_w_js.textContent = data[language].nazwa_klasy_w_html];
    } */

};


const langSec = document.body;
const buttons = document.querySelectorAll('button');
const textTitle = document.querySelector('.zakladka');
const textDesc = document.querySelector('.paragraf');
const textTest = document.querySelector('.test');
// const nazwa_elementu_w_js] = document.querySelector('.nazwa_klasy_w_html]');   



const lastLanguage = localStorage.getItem('language');
//console.log('Last Language:', lastLanguage);
localStorage.setItem('language', lastLanguage)
if (!lastLanguage) {
    lastLanguage = 'polish'; // domyślny język jeżeli nie ma w localStorage
}

changeLanguage(lastLanguage);

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        
        const attr = button.getAttribute('language');

        changeLanguage(attr);

        localStorage.setItem('language', attr);
        //console.log('Language set to:', attr);

    });


});


