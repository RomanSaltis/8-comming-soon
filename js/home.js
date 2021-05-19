import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progress-bar/progressBar.js';
import { socials } from './components/socials/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialsData);
progressBar('.left-column', progressBarData);

// - kas?
// - koks ivykio tipas?
// - ka daryti?

const logoDOM = document.querySelector('.logo');
function handleLogoClick() {
    console.log('Buvo paspaustas logotipas!');
}
logoDOM.addEventListener('click', handleLogoClick);


const btnDOM = document.querySelector('.btn');
let count = 0;
btnDOM.addEventListener('click', () => {
    count++;
    btnDOM.innerText = `Click me (${count})`;
});