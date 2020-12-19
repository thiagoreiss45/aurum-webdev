/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */


const removeRepeated = (string, limit) => {
    var limit_aux = 0
    var array = [...string]
    array = array.filter((item,pos,arr)=>{
        if (item !==arr[pos-1])
            limit_aux = 0
        else
            limit_aux +=1

        return pos === 0 || limit_aux<limit;
    })
    return array.join('')
}

export default removeRepeated;

console.log(removeRepeated("xxxyzzaaayy",1))


