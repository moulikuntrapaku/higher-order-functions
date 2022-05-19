function forEach(array, callbackFunction)
{
    for(let index=0; index<array.length; index++)
    {
        callbackFunction(array[index])
    }
}


let array = [1,2,3,4,5,6]

let callbackFunction = (value) =>{
    console.log(value)
}

forEach(array,callbackFunction)