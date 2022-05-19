function reduce(array, callbackFunction)
{
    result = array[0]
    for(let index=1; index<array.length; index++)
    {
        result = callbackFunction(result, array[index])
        
    }
    return result
}


let array = [1,2,3,4,5]

let callbackFunction = (result,value) =>{
    return result*value
}

console.log(reduce(array,callbackFunction))