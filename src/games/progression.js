import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const progressionSize = 10;

const buildProgression = () => {
  const startNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10) + 1;
  const progression = [startNumber];
  while (progression.length < progressionSize) {
    const lastElement = progression[progression.length - 1];
    progression.push(lastElement + step);
  }
  return progression;
};

const getQuestion = (progression, index) => {
  const newProgression = progression.slice();
  newProgression[index] = '..';
  return newProgression.join(', ');
};

const genGame = () => {
  const progression = buildProgression();
  const index = getRandomNumber(0, progressionSize - 1);
  const question = getQuestion(progression, index);
  const correctAnswer = progression[index];
  return [String(correctAnswer), question];
};

const gameRule = 'What number is missing in the progression?';

export default () => run(genGame, gameRule);
