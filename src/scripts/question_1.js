/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */


const removeRepeated = (string, limit) => {
    var limit_aux = 0

    //  String to Array transformation
    var array = [...string]

    //  The filter function iterates over the elements and creates a new array, then add only the elements that passed
    //  the return conditions. 
    //  item = element, pos = index, arr = array
    array = array.filter((item,pos,arr)=>{
        if (item !==arr[pos-1])
            limit_aux = 0
        else
            limit_aux +=1
        //  If its the first element, or the number of equal consecutives is less than the limit,
        //  the return is 'true' (add the element)
        return pos === 0 || limit_aux<limit;
    })

    //  Array to String through join() function
    array = array.join('')

    return array
}



