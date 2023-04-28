import './index.css';
import logoIMG from './assets/JS-logo.png';

console.log('Hello World!');

const bodyElement = document.body; 

const titleElement = document.createElement('h1');
titleElement.innerText = 'I love JavaScript';

const imageElement = document.createElement('img');
imageElement.src = logoIMG;

bodyElement.append(titleElement, imageElement);