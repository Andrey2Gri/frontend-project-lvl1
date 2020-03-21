import run from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameGenerate = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(correctAnswer), question];
};

export default () => run(gameGenerate, 'Answer "yes" if given number is prime. Otherwise answer "no".');
