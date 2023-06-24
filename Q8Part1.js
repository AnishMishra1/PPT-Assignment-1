function dupicateMissing(arr){
    let miss = []
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for(let i= min ; i<max ; i++){
        if(arr.indexOf(i)<0){
            miss.push(i)
        }
    }
    return miss

   


}
console.log(dupicateMissing([1,2,2,4]));