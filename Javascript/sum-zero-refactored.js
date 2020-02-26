function sumZero(array) {
  leftPointer = 0;
  rightPointer = array.length -1;
  
  while(leftPointer < rightPointer){
    let sum = array[leftPointer] + array[rightPointer];
    if(sum === 0){
      return [array[leftPointer],array[rightPointer]]
    } else if (sum >0) {
      rightPointer--;      
    } else {
      leftPointer++;      
    }//end if
  }//end while
}//end sumZero

console.log(sumZero([-4,-3,-2,-1,0]))