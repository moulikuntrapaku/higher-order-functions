function map(array, callbackFunction)
{
    result_array = []
    for(let index=0; index<array.length; index++)
    {
        result = callbackFunction(array[index])
        result_array.push(result)
    }
    return result_array
}


let array = [1,2,3,4,5]

let callbackFunction = (value) =>{
    return value+value
}

console.log(map(array,callbackFunction))