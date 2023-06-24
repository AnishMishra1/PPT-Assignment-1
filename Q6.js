//check the duplicate

function checkDuplicate(nums){
    const count ={}

    for (let i =0; i<nums.length;i++){
        const num = nums[i];
        if(count[num]){
            return true
        }
        count[num] = true;

    }
    return false

}

console.log(checkDuplicate([1,4,2,3]));