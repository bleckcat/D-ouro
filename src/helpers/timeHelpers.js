export const getTimeStamp = (d) => {
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const placingZeros = (n) => {
    return ("0" + n).slice(-2);
  };

  return `${placingZeros(hours)}:${placingZeros(minutes)}:${placingZeros(
    seconds
  )}`;
};
