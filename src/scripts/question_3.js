/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */
const lettersSum = (string1, string2) => {
  //  A string that contains all the alphabet chars
  const alphabet_string = "abcdefghijklmnopqrstuvwxyz";

  //  String to Array transformations.
  const alphabet_array = [...alphabet_string];
  const str1_array = [...string1];
  const str2_array = [...string2];

  //  Arrays to store the number of each char
  let str1_numbers = []
  let str2_numbers = []

  //  For each array char, an index of corresponding value associated
  str1_array.forEach(char => {
    str1_numbers.push(alphabet_array.indexOf(char) + 1)
  });
  str2_array.forEach(char => {
    str2_numbers.push(alphabet_array.indexOf(char) + 1)
  });

  //  Math.max()/min() returns the higher/lower value.
  let str1_higher = Math.max(...str1_numbers);
  let str1_lower = Math.min(...str1_numbers);
  let str2_higher = Math.max(...str2_numbers);
  let str2_lower = Math.min(...str2_numbers);

  //  Equation given
  let equation = (str1_higher*str2_lower) + (str2_higher*str1_lower);
  return equation;
};
