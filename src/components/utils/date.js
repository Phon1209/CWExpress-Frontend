import { leadingZero } from ".";

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
