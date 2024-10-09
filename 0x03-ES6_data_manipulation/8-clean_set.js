export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const filteredValues = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return filteredValues.join('-');
}
