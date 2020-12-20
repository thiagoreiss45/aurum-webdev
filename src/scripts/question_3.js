/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */
const lettersSum = (string1, string2) => {
    const alphabet_string = "abcdefghijklmnopqrstuvwxyz"
    var alphabet_array = [...alphabet_string]

    var array1 = [...string1]
    var array2 = [...string2]

    var map1 = new Map()
    var map2 = new Map()

    array1.forEach(element => {
        map1.set(element, alphabet_array.indexOf(element)+1)
    });
    array2.forEach(element => {
        map2.set(element, alphabet_array.indexOf(element)+1)
    });

    var biggestStr1 = Math.max(...map1.values())
    var smallestStr1 = Math.min(...map1.values())

    var biggestStr2 = Math.max(...map2.values())
    var smallestStr2 = Math.min(...map2.values())

    return (biggestStr1*smallestStr2) + (biggestStr2*smallestStr1)
}

/* console.log(lettersSum("abuj","vkas")) */