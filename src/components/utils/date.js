const leadingZero = (number, leading) => {
  return number.toString().padStart(leading, "0");
};

export const dateFormat = (date) => {
  return (
    [
      leadingZero(date.getDate(), 2),
      leadingZero(date.getMonth() + 1, 2),
      date.getFullYear(),
    ].join("/") +
    " " +
    [
      leadingZero(date.getHours(), 2),
      leadingZero(date.getMinutes(), 2),
      leadingZero(date.getSeconds(), 2),
    ].join(":")
  );
};
