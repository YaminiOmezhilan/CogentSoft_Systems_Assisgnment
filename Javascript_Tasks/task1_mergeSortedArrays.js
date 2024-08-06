const mergeSortedArrays = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);

const array1 = [1, 4, 7, 10];
const array2 = [1, 3, 5, 7, 9, 11];

console.log(mergeSortedArrays(array1, array2));
