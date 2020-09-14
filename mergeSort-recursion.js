// Recrusive Merge Sort
//pseudo code


// 1. break up the array into halves until you have arrays that are empty or have one element
// 2. once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// 3. once the array has been merged back together, return the merged(and sorted)array

function mergeRecursion(arr){
    if(arr.length <=1) return arr;
    let halfIdx = Math.floor(arr.length/2)
    let arr1 = mergeRecursion(arr.slice(0, halfIdx))
    let arr2 = mergeRecursion(arr.slice(halfIdx, arr.length))
    return merge(arr1, arr2)
}

function merge(arr1, arr2){
    
    let i = 0;
    let j = 0;
    let result = [];

    while ( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }

    while(arr1.length > i){
        result.push(arr1[i])
        i++
    }

    while(arr2.length > j){
        result.push(arr2[j])
        j++
    }
    return result
}

console.log(mergeRecursion([2,3,4,22,33,44,55]))


















// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// console.log(mergeSort([10,24,76,73]))