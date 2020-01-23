//     Reverse order of elements in place
//    [3,5,2,5,2,3,9] → [9,3,2,5,2,5,3]   
/*
const reverseArray = (numbers) => {
    
let frontElement = 0;
let backElement = numbers.length -1 ;
let tempElement =0;

const swap = (numbers) => {

    tempElement = numbers[frontElement];        
    numbers[frontElement] = numbers[backElement];
    numbers[backElement] = tempElement;

} //end swap

while(frontElement < backElement){

    swap (numbers, frontElement, backElement);
    frontElement ++;
    backElement --;

} //end while
console.log(numbers);


} //end reverseArray

numbers = [3,5,2,5,2,3,9];
reverseArray(numbers);
*/
const reverseArray = (arr) => {
    const midPoint = Math.ceil(arr.length/2);
    const lastPoint = arr.length - 1;
  //  console.log(midPoint)
    for (let i=lastPoint; i >= midPoint; i--) {        
        let curNum = arr[i];     
        arr[i] = arr[lastPoint-i]
console.log("lastPoint " , lastPoint, "i ", i)
        arr[lastPoint - i] = curNum;
    }
   // console.log(arr)
    return arr;
  };
  reverseArray([3,5,2,5,2,3,9]);