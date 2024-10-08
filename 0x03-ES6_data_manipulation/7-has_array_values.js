export default function hasValuesFromArray(set, array) {
  for (const values of array.values()) {
    if (!set.has(values)) {
      return false;
    }
  }
  return true;
}
