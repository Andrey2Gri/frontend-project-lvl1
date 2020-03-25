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

const genGame = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => run(genGame, gameRule);
