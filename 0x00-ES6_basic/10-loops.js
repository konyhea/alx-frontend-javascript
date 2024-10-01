export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];

  for (let value of array) {
    resultArray.push(appendString + value);
  }

  return resultArray;
}
