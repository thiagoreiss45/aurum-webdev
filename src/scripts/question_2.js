/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */
const replaceChar = (string, times) => {
  let times_aux = 0, element_added;
  
  //  String to Array transformation
  const str_array = [...string];  
    
  if (str_array[0] == "?") {
    for (var i = str_array.length - 1; i > 0; i--) {
      if (str_array[i] !== "?") {
        element_added = str_array[i];

        //  "element_added" will be added "times" times
        while (times_aux < times) {  
          if (times_aux === 0){

            //  splice(index, number of removes, new element) replaces an element   
            str_array.splice(0, 1, element_added);
          } else { 

            //  Number of removes = 0, no char is removed, only added
            str_array.splice(0, 0, element_added);  
          }
          times_aux++;
        }
        break;
      }
    }
  }

  //  When a "?" character is found, replace with the previous element
  for (var i = 0; i < str_array.length; i++) {
    if (str_array[i] == "?") {
      times_aux = 0;
      element_added = str_array[i - 1];

      while (times_aux < times) {
        if (times_aux === 0) {
          str_array.splice(i, 1, element_added);
        } else {
          str_array.splice(i, 0, element_added);
        }
        times_aux++;
      }    
    }
  }
  
  //  Array to String through join() function.
  return str_array.join('');
};