import { run, getRandomNumber } from '../index.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gameGenerate = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [correctAnswer, question];
};

export default () => run(gameGenerate, 'Find the greatest common divisor of given numbers.');
