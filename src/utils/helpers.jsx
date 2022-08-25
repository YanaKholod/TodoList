export const pastDate = () => {
  const date = new Date();
  const randomNumber = Math.floor(Math.random() * (365 - 1));
  const currentDate = date.setDate(date.getDate() - randomNumber);

  return new Date(currentDate);
};
