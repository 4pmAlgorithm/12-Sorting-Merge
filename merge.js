function mergeSort(arr){

    let result = [];

    while(arr.length >= 0){

        if(arr[0] < arr[1]){
        result.push(arr[0])
        }

       arr.slice(1)
    
        
    
    }
    return result.push(mergeSort(arr.slice(1)))
}



console.log(mergeSort([10,24,76,73]))