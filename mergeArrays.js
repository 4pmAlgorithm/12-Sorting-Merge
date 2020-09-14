// Merges two already sorted arrays

//pseudocode
// 1. create an empty arr, take a look at the smallest values in each input arr.
// 2. while there are still values, we haven't looked at ..
//     2-1. if the value in the first arr is smaller than the value in the second arr, push the val in the first arr into our results and move on to the next value in the first arr.
//     2-2. if the val in the first arr is larger than the val in the second arr, push the val in the second arr into our results and move on to the next val in the second arr. 
//     2-3. once we exhaust one arr, push in all remaining val from the other arr. 




//////////////////////////////::::::::::::::::://///////////////
////::::::: practice 09/14/2020  PM :::::: //////////
//////////////////////////////::::::::::::::::://///////////////
function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;

        while( i < arr1.length && j < arr2.length){
            
            console.log("::::::::::::::::::::::::::::::::::::::::::::::::1 while ::", arr1[i], "<", arr2[j])

            if(arr1[i] < arr2[j]){
           
            console.log("push arr1[i]", arr1[i])
            
            results.push(arr1[i])
            console.log("::1 ", results)
            i++
            } else {
           
            console.log(" push else", arr2[j])
            
            results.push(arr2[j])
            console.log("::1 else", results)
            j++
            }
        }

        while(i < arr1.length){

            console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::2 while:: arr1[i]", arr1[i])

            results.push(arr1[i])
            console.log("::2", results)
            i++
        }

        while(j < arr2.length){

            console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 3 while :::  arr2[j]", arr2[j])

            results.push(arr2[j])
            console.log("::3", results)
            j++
        }
        console.log(":::::::", results)
        return results
}

console.log(merge([2, 3, 4, 5], [1, 100, 200, 300]))

//[2][1]? => //[1]
//[2][100]? => //[1,2]
//[3][100]? => //[1,2,3] 
//[4][100]? => //[1,2,3,4] 
//[5][100]? => //[1,2,3,4,5]
//[1, 2, 3, 4, 5, 100, 200, 300]









function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
//console.log(merge([100,200], [1,2,3,5,6]))

                   