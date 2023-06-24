function finalTagetPair(arr){
    let i = 0;
    //let j = arr.length-1;
    let j = i+1;
    let target = 9;

    while(j>i){
        let sum = arr[i]+arr[j];
        if(sum==target){
            return [i,j];

        }
        else if(sum> target){
            //j--;
            j++;
            
        }
        else{
            i++;
        }
    }
}

console.log(finalTagetPair([2,7,11,15]));