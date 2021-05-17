import { renderClock } from './components/clock/clock.js';
import { socials } from './components/socials/socials.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialsData);