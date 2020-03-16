import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');
export const toGreet = (name) => {
  console.log(`Hello, ${name}`);
};
const isEqual = (num) => num % 2 === 0;

export const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  toGreet(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const correctAnswer = isEqual(number) ? 'yes' : 'no';
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
    Let's try again, Bill!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
