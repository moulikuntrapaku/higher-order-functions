function filter(array, callbackFunction)
{
    result_array = []
    for(let index=0; index<array.length; index++)
    {
        result = callbackFunction(array[index])
        if(result != undefined)
        {
            result_array.push(result)
        }
    }
    return result_array
}


let array = [-1,2,3,4,-5,6,7,8,9,10]

let callbackFunction = (value) =>{
    if(value>2)
    {
        return value
    }
}

console.log(filter(array,callbackFunction))