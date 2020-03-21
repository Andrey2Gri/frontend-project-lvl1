import run from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;
const gameGenerate = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [String(correctAnswer), question];
};

export default () => run(gameGenerate, 'Answer "yes" if the number is even, otherwise answer "no".');
