/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */
const replaceChar = (string, times) => {
    var times_aux = 1;
    var array = [...string];  //  String to Array transformation

    //  If the first element of the array is "?",
    //  the algorithm is going to iterate over the array 
    //  starting from the end.
    if (array[0] == "?") {
        for (var i = array.length-1; i > 0; i--) {
            if (array[i] != "?") {
                //  splice() function replaces an element
                //  splice(index, number of removes, new element)    
                array.splice(0, 1, array[i]);  

                //  This element added will be saved on a variable, "element"
                var element = array[i];  

                //  "element" will be added "times" times, at array[times_aux]
                while (times_aux < times) {  
                    //  number of removes = 0, no item is removed, only added
                    array.splice(times_aux,0,element);  
                    times_aux++;
                }
                break;
            }
        }
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] == "?") {
            //  When a "?" character is found, replace with the previous element
            array.splice(i, 1, array[i-1]);  
            times_aux = 1;
            element = array[i-1];

            //  "element" will be added "times" times, at array[i].
            while (times_aux < times) {
                //  number of removes = 0, no item is removed, only added.
                array.splice(i, 0, element);
                times_aux++;
            }    
        }
    }
    
    array = array.join('');  //  Array to String through join() function.
    return array;
}
