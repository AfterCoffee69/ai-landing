const i18Obj = {
 'en': {
    'header__title-text': 'Artificial Intelligence',
    'nav__link-home': 'Home',
    'nav__link-about': 'About',
    'nav__link-services': 'Services',
    'nav__link-blog': 'Blog',
    'nav__link-contact': 'Contact',
    'header__btn-sing': 'Sing In',
    'intro__suptitle-text': 'Next genaretion platform',
    'intro__title-text': 'Artificial intelligence & Syber security',
    'intro__subtitle-text': 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    'intro__btn-text': 'Get Started',
    'intro__btn-play-text': 'Watch Video',
 },
 'ru' : {
    'header__title-text': 'Искусственный интеллект',
    'nav__link-home': 'Домой',
    'nav__link-about': 'О нас',
    'nav__link-services': 'Сервисы',
    'nav__link-blog': 'Блог',
    'nav__link-contact': 'Контакт',
    'header__btn-sing': 'Войти',
    'intro__suptitle-text': 'Платформа нового поколения',
    'intro__title-text': 'Искусственный интеллект и Кибер безопасность',
    'intro__subtitle-text': 'Лорем ипсум — это текст-заполнитель, обычно используемый в графической, полиграфической и издательской отраслях для предварительного просмотра макетов и визуальных макетов.',
    'intro__btn-text': 'Начать',
    'intro__btn-play-text': 'Смотреть видео',
 }
}

function getTranslate(language) {
  const elements = document.querySelectorAll('[data-i18]');

  elements.forEach(element => {
    const translationKey = element.dataset.i18;
    const translation = i18Obj && i18Obj[language] && i18Obj[language][translationKey];
    if (translation) {
      element.textContent = translation;
    }
  });
}

let currentLang = 'en';

function toggleLanguage() {
  if (currentLang === 'en') {
    getTranslate('ru');
    currentLang = 'ru';
    localStorage.setItem('language', 'ru');
  } else {
    getTranslate('en');
    currentLang = 'en';
    localStorage.setItem('language', 'en');
  }
}

const lang_btn = document.querySelector('.lang-btn');
lang_btn.addEventListener('click', toggleLanguage);

// function changeTheme() {
//     document.documentElement.style.setProperty('--main-color', '#fff');
//     document.documentElement.style.setProperty('--card-color', '#fff');
//     document.documentElement.style.setProperty('--header-footer-color', '#fff');
//     document.documentElement.style.setProperty('--bg-color', '#fff');
// }

// const theme_btn = document.querySelector('.mode-btn');
// theme_btn.addEventListener('click', changeTheme);

const root = document.documentElement;
const button = document.querySelector('.mode-btn');

button.addEventListener('click', function () {
  const root = document.documentElement;
  if (button.textContent === 'light') {
    setDarkTheme(root);
    button.textContent = 'dark';
    localStorage.setItem('theme', 'dark');
  } else {
    setLightTheme(root);
    button.textContent = 'light';
    localStorage.setItem('theme', 'light');
  }
});

function setDarkTheme(root) {
  root.style.setProperty('--text-color', 'white');
  root.style.setProperty('--main-color', '#020A18');
  root.style.setProperty('--card-color', '#131b28');
  root.style.setProperty('--header-footer-color', '0a121f');
  root.style.setProperty('--bg-color', '#08101d');
}

function setLightTheme(root) {
    root.style.setProperty('--text-color', 'black');
    root.style.setProperty('--main-color', '#c7c8d6');
    root.style.setProperty('--card-color', '#cdced1');
    root.style.setProperty('--header-footer-color', '#cfc9f2');
    root.style.setProperty('--bg-color', '#e1e3f5');
}

const img_btn = document.querySelector('.intro__btn');
const img = document.querySelector('.intro__img');

let isImg2 = false;

img_btn.addEventListener('click', function() {
  if (isImg2) {
    img.src = "./assets/intro.png";
    isImg2 = false;
  } else {
    img.src = "./assets/last-main.png";
    isImg2 = true;
  }
});

function getLocalStorage() {
    if (localStorage.getItem('theme') === 'dark') {
      const root = document.documentElement;
      setDarkTheme(root);
      button.textContent = 'dark';
    } else {
      const root = document.documentElement;
      setLightTheme(root);
      button.textContent = 'light';
    }
  
    if (localStorage.getItem('language') === 'ru') {
      getTranslate('ru');
      currentLang = 'ru';
    } else {
      getTranslate('en');
      currentLang = 'en';
    }
  }

window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  localStorage.setItem('theme', button.textContent === 'dark' ? 'dark' : 'light');
  localStorage.setItem('language', currentLang);
}

window.addEventListener('beforeunload', setLocalStorage);

const audioPlayer = document.querySelector('.audioPlayer');
const playButton = document.querySelector('.intro__btn-play');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

