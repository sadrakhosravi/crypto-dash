/**
 * Calculates the moving average of an array with a specified window size.
 * Handles arrays whose lengths are not divisible by n.
 * @param {number[]} array - The input array of numbers.
 * @param {number} n - The window size for the moving average.
 * @returns {number[]} - An array of moving averages.
 */
export const movingAverage = (array: number[], n: number) => {
  if (n <= 0) {
    throw new Error('Window size n must be greater than 0.');
  }

  const result = [];
  for (let i = 0; i < array.length; i += n) {
    const window = array.slice(i, i + n); // Get the current window
    const sum = window.reduce((acc, num) => acc + num, 0); // Sum of the window
    result.push(sum / window.length); // Calculate the average
  }

  return result;
};
