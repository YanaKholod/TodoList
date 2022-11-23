export const pastDate = (daysAgo) => {
  const date = new Date();
  const currentDate = date.setDate(date.getDate() - daysAgo);
  return new Date(currentDate);
};
