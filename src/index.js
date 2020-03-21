import readlineSync from 'readline-sync';

const run = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (!game) {
    return;
  }
  console.log(task);

  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const [correctAnswer, question] = game();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
    Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default run;
