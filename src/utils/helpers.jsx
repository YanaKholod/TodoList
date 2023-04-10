export const pastDate = (daysAgo) => {
  const date = new Date();
  const currentDate = date.setDate(date.getDate() - daysAgo);

  return new Date(currentDate);
};

// const date = new Date(Date.UTC(1970, 0, 1, 0, 0, 1680178177));
// const utcDateString = date.toUTCString();
