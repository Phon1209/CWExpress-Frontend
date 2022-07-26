export const leadingZero = (number, leading) => {
  return number.toString().padStart(leading, "0");
};

export { dateFormat } from "./date";
