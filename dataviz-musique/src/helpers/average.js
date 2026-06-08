import unpack from "./unpack.js";

export default function average(rows, groupBy, key) {
  const dataArray = unpack(rows, groupBy);
  const values = Array.from(new Set(dataArray));
  const averages = {};

  for (const value of values) {
    const filtered = rows.filter((r) => r[groupBy] === value);
    const numbers = unpack(filtered, key).map((n) => Number(n));
    averages[value] = d3.mean(numbers);
  }
  return averages;
}
