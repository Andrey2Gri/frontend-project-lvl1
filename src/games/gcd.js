import run from '../index.js';
import getRandomNumber from '../utils.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const genGame = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [String(correctAnswer), question];
};

const gameRule = 'Find the greatest common divisor of given numbers.';

export default () => run(genGame, gameRule);
