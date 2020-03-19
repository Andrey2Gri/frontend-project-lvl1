import { run, getRandomNumber } from '../index.js';

const isEven = (num) => num % 2 === 0;
const gameGenerate = () => {
  const number = getRandomNumber(100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => run(gameGenerate, 'Answer "yes" if the number is even, otherwise answer "no".');
