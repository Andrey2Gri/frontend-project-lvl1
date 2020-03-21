import run from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['+', '-', '*'];

const getResultOperation = (operation, num1, num2) => {
  switch (operation) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const gameGenerate = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operation = operations[getRandomNumber(0, 2)];
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = getResultOperation(operation, number1, number2);

  return [String(correctAnswer), question];
};

export default () => run(gameGenerate, 'What is the result of the expression?');
