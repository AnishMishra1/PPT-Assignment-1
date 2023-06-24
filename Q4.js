function addInLastDigitArr(arr){
   let integer = parseInt(arr.join(''))
   intadd =  integer +1;

   const output = [...String(intadd)].map(Number);
   return output;
    
}



console.log(addInLastDigitArr([1,2,3]))