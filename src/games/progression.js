import { run, getRandomNumber } from '../index.js';

const buildProgression = () => {
  const startNumber = getRandomNumber(10);
  const step = getRandomNumber(10) + 1;
  const result = [startNumber];
  while (result.length < 10) {
    const lastElement = result[result.length - 1];
    result.push(lastElement + step);
  }
  return result;
};
const getElement = (numbers, index) => numbers[index];

const getQuestion = (numbers, index) => {
  const newNumbers = numbers.slice();
  newNumbers[index] = '..';
  return newNumbers.join(', ');
};

const brainProgression = () => {
  const progression = buildProgression();
  const index = getRandomNumber(10);
  const question = getQuestion(progression, index);
  const correctAnswer = getElement(progression, index);
  return [String(correctAnswer), question];
};

export default () => run(brainProgression, 'What number is missing in the progression?');
