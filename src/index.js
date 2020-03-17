import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');
export const toGreet = (name) => console.log(`Hello, ${name}`);
export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const main = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  toGreet(name);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, question] = game();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
    Let's try again, Bill!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
