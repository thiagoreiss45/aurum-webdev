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
  const str_array1 = [...string1];
  const str_array2 = [...string2];

  //  Arrays to store the number of each char
  let str1_numbers = []
  let str2_numbers = []

  //  For each array char, an index of corresponding value associated
  str_array1.forEach(char => {
    str1_numbers.push(alphabet_array.indexOf(char) + 1)
  });
  str_array2.forEach(char => {
    str2_numbers.push(alphabet_array.indexOf(char) + 1)
  });

  //  Math.max()/min() returns the higher/lower value.
  let higherStr1 = Math.max(...str1_numbers);
  let lowerStr1 = Math.min(...str1_numbers);
  let higherStr2 = Math.max(...str2_numbers);
  let lowerStr2 = Math.min(...str2_numbers);

  //  Equation given
  let equation = (higherStr1*lowerStr2) + (higherStr2*lowerStr1);
  return equation;
};
