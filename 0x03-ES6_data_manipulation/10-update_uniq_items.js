export default function updateUniqueItems(argsMap) {
  // Check if the argument is not a Map
  if (!(argsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map
  for (const [key, value] of argsMap) {
    // If the value is 1, update it to 100
    if (value === 1) {
      argsMap.set(key, 100);
    }
  }

  return argsMap;
}
