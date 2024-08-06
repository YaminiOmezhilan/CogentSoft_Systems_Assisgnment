const intersectionSortedArrays = (arr1, arr2) =>
  arr1.filter((value) => arr2.includes(value));

const array1 = [1, 4, 7, 10];
const array2 = [1, 3, 5, 7, 9, 11];

console.log(intersectionSortedArrays(array1, array2));
