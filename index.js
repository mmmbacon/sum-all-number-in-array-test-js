const sumItems = function(array) {
  // Sum all the numbers in the array

  if (!Array.isArray(array)) {
    return array;
  }

  if (array.length < 1 || array === undefined) {
    return 0;
  }

  return parseInt(array.reduce((acc,currVal) => sumItems(acc) + sumItems(currVal)));
};

module.exports = sumItems;