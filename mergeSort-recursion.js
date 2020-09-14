// Recrusive Merge Sort
//pseudo code


// 1. break up the array into halves until you have arrays that are empty or have one element
// 2. once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// 3. once the array has been merged back together, return the merged(and sorted)array

function merge(arr){

    let arr1 = []
    let arr2 = []

    if(arr.length >= 0){
        let halfIdx = Math.floor(arr.length/2)
        console.log(halfIdx)
        arr1 = arr.slice(0, halfIdx)
        arr2 = arr.slice(halfIdx, arr.length)
       
    }
    return arr2
}

console.log(merge([2,3,4,22,33,44,55]))


















// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// console.log(mergeSort([10,24,76,73]))