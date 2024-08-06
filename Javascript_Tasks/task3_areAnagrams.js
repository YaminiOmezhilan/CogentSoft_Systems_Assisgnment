const areAnagrams = (str1, str2) => {
  const normalize = (str) =>
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
};

const str1 = "Madam Curie";
const str2 = "Radium came";

console.log(
  `The strings "${str1}" and "${str2}" ${
    areAnagrams(str1, str2) ? "are" : "are not"
  } anagrams.`
);

const str3 = "hello";
const str4 = "world";

console.log(
  `The strings "${str3}" and "${str4}" ${
    areAnagrams(str3, str4) ? "are" : "are not"
  } anagrams.`
);
