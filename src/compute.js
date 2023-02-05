export const computeChoises = (arr) => {
  const result = [];
  if (arr[0]) {
    result.push(`Type of game should be ${arr[0]}`);
  }
  if (arr[1]) {
    result.push(`Playing on ${arr[1]}`);
  }
  if (arr[2]) {
    result.push(`Genre: ${arr[2]}`);
  }
  if (arr[3]) {
    result.push(`Game length: ${arr[3]}`);
  }
  if (arr[4]) {
    result.push(`Difficulty: ${arr[4]}`);
  }
  if (arr[5]) {
    result.push(`Multiplayer: ${arr[5]}`);
  }
  if (arr[6]) {
    result.push(`Budget: ${arr[6]}`);
  }
  return result;
};
