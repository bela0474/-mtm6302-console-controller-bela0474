const pageTitleElement = document.getElementById('pageTitle');
const pageDescriptionElement = document.getElementById('pageDescription');
const bodyElement = document.body;

function setTitle(text) {
  pageTitleElement.innerText = text;
}

function setDescription(text) {
  pageDescriptionElement.innerText = text;
}

function setBackgroundColor(color) {
  bodyElement.style.backgroundColor = color;
}

function setFontColor(color) {
  bodyElement.style.color = color;
}

function setTheme(theme) {
  bodyElement.classList.remove('light-theme', 'dark-theme');
  bodyElement.classList.add(theme);
}


