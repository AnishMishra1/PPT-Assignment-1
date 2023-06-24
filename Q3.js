//divide and conquer method
//time complexity 0(n)
// space complexity 0(1)
function findTargetIndex(arr){
    let target = 5;
    for(let i = 0; i<arr.length ;i++){
        if(arr[i]=== target){
            return i;
        }
        else{
            i++
        }
    }

}

console.log(findTargetIndex([1,3,5,6]));