let count = 0;
function removeTargetValue(nums){
    let val = 3;

    for(let i= nums.length -1; i>=0; i--){
        if(nums[i] === val){
            nums.splice(i,1);
            count++;
        }
    }
    return nums
}

console.log(removeTargetValue([3,2,2,3]), count)