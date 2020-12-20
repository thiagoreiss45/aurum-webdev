/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */
const removeRepeated = (string, limit) => {
    var limit_aux = 0;
    var array = [...string];  //  String to Array transformation.

    //  The filter() function iterates over the elements and creates a new array, then add only the elements that passed the return conditions. 
    //  item = element, pos = index, arr = array
    array = array.filter((item,pos,arr)=>{   
         
        //  When a different item is found, the consecutivity is ended, then limit_aux gets reseted
        if (item != arr[pos-1]) {   
            limit_aux = 0;
        } else {
            limit_aux +=1;
        }

        //  If its the first element, or the number of equal consecutives is less than the limit, add the element(returns true)
        return pos === 0 || limit_aux<limit;
    })
    
    array = array.join('');  //  Array to String through join() function
    return array;
}