/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */

const replaceChar = (string, times) => {
    //  String to Array transformation
    var array = [...string]
    if(array[0] == "?"){
        for(var i=array.length-1 ; i>0 ; i--){
            if(array[i] !="?"){
                array.splice(0,1,array[i])
                var times_aux = 1
                var element = array[i]
                while(times_aux < times){
                    array.splice(times_aux,0,element)
                    times_aux++
                }
                break
            }
        }
    }
    for(var i=0 ; i<array.length ; i++){
        if(array[i] == "?"){
            array.splice(i,1,array[i-1])
            times_aux = 1
            element = array[i-1]
            while(times_aux < times){
                array.splice(i,0,element)
                times_aux++
            }    
        }
    }
    //  Array to String through join() function
    array = array.join('') 

    return array 
}

