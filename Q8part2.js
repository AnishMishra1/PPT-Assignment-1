function duplicate(arr){
    let same ;

   
    let count =0;

    for(let i= 0; i<arr.length ; i++){
        
        if(arr[i+1] === arr[i]){
            count++;
           same = arr[i+1]
          

        }
        else{
            i++;
        }
        
    // }
    // if(count>0){
    //     return true;
    // }
    // else{
    //     return false
    // }
   

}
return same
}

console.log(duplicate([1,2,2,2,4]))