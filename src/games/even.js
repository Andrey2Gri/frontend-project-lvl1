import run from '../index.js';
import { genGame } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => run(() => genGame(isEven), gameRule);
