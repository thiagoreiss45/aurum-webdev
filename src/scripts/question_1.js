/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */
const removeRepeated = (string, limit) => {
  let limit_aux = 0;

  //  String to Array transformation.
  const str_array = [...string];  

  // char = character, pos = position, arr = array
  const isCharValid = (char, pos, arr) => {   
    
    //  When a different char is found, then limit_aux gets reseted
    if (char !== arr[pos-1]) {   
      limit_aux = 0;
    } else {
      limit_aux += 1;
    }

    return pos === 0 || limit_aux < limit;
  };
    
  //  If "isCharValid" returns true, add the element to "array_filtered"
  const array_filtered = str_array.filter(isCharValid);
    
  //  Array to String through join() function
  return array_filtered.join('');
};