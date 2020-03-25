import run from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const lengthOperator = operators.length - 1;

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown operation: '${operator}'!`);
  }
};

const genGame = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, lengthOperator)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(operator, number1, number2);

  return [String(correctAnswer), question];
};

const gameRule = 'What is the result of the expression?';

export default () => run(genGame, gameRule);
