import run from '../index.js';
import getRandomNumber from '../utils.js';

const progressionLength = 10;

const buildProgression = (startNumber, step, length) => {
  const progression = [startNumber];
  while (progression.length < length) {
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

const genGameData = () => {
  const progression = buildProgression(
    getRandomNumber(0, 10),
    getRandomNumber(1, 10),
    progressionLength,
  );
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const question = getQuestion(progression, hiddenElementIndex);
  const correctAnswer = progression[hiddenElementIndex];
  return [String(correctAnswer), question];
};

const task = 'What number is missing in the progression?';

export default () => run(genGameData, task);
