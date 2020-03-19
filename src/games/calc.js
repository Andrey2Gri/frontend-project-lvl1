import { run, getRandomNumber } from '../index.js';

const getResultOperation = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const gameGenerate = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(3)];
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = getResultOperation(operation, number1, number2);

  return [correctAnswer, question];
};

export default () => run(gameGenerate, 'What is the result of the expression?');
