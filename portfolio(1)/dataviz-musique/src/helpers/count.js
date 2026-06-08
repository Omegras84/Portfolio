import unpack from "./unpack.js";

export default function count(rows, key) {
  const dataArray = unpack(rows, key);
  const values = Array.from(new Set(dataArray));
  const counts = {};
  for (const value of values) counts[value] = 0;
  for (const value of dataArray) counts[value] += 1;
  return counts;
}
