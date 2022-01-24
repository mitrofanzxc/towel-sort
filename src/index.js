
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    for (var i = 0; i < matrix.length; i++) {
      if (Array.isArray(matrix[i])) {
        arr = arr.concat(towelSort(matrix[i]));
      } else {
        arr.push(matrix[i]);
      }
    }
    return arr.sort((a, b) => a - b);
  }
