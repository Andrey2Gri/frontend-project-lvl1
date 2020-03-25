export const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const genGame = (predicant) => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const correctAnswer = predicant(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};
