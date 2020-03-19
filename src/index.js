import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');
export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const run = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}`);
  if (!game) {
    return;
  }
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, question] = game();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (String(correctAnswer) !== String(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
    Let's try again, Bill!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
