import { main, getRandomNumber } from '../index.js';

const brainCalc = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(3)];
  const question = `${number1} ${operation} ${number2}`;
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    default:
      correctAnswer = number1 * number2;
  }
  return [String(correctAnswer), question];
};
export default () => main(brainCalc, 'What is the result of the expression?');
