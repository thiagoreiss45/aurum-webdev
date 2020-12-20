/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */
const lettersSum = (string1, string2) => {
    //  A string that contains all the alphabet letters
    const alphabet_string = "abcdefghijklmnopqrstuvwxyz";

    //  String to Array transformations.
    var alphabet_array = [...alphabet_string]; 
    var array1 = [...string1];
    var array2 = [...string2];

    //  A Map object is a simple key/value map.
    var map1 = new Map();
    var map2 = new Map();

    //  For each array element, an alphabet_array value associated
    //  KEY = array element
    //  VALUE = index of corresponding value
    array1.forEach(element => {
        map1.set(element, alphabet_array.indexOf(element)+1);
    });
    array2.forEach(element => {
        map2.set(element, alphabet_array.indexOf(element)+1);
    });

    //  Math.max()/min() returns the higher/lower value.
    var higherStr1 = Math.max(...map1.values());
    var lowerStr1 = Math.min(...map1.values());
    var higherStr2 = Math.max(...map2.values());
    var lowerStr2 = Math.min(...map2.values());

    return (higherStr1*lowerStr2) + (higherStr2*lowerStr1);
}
