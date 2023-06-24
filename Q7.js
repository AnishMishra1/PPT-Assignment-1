function arrangeZeros(arr){

    let StartIndex = 0;

    for(let i = 0 ; i< arr.length ; i ++){
        if(arr[i] !== 0){
            arr[StartIndex] = arr[i];
            StartIndex++;
        }
    }
    while(StartIndex< arr.length){
        arr[StartIndex] = 0
        StartIndex++;
    }
}
let arr = [0,1,2,0,3]
console.log(arrangeZeros(arr), arr);