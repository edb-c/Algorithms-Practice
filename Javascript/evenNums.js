

const evenNums = (nums) => {

    if (nums == null || nums.length == 0 ) {
      return nums
    }//end if
  
    let theEnd = nums.length;
    let lastNumber = getLastNumber(nums);
  
    while (lastNumber >= 0) {
  
      if (nums[lastNumber] % 2 == 0) {            
        nums[--theEnd] = nums[lastNumber];        
        }        
        nums[--theEnd] = nums[lastNumber];        
        lastNumber--;    
        }    
        console.log(nums); 
  
  }; //end evenNums
  
const getLastNumber = (nums) => { 
      let i = nums.length - 1;
   
      while ( i>=0 && isNaN(nums[i])) 
      {
        i--;      
      }//end while
  
      return i;
  }; //getLastNumber

 
//Test Cases: 
//evenNums([1,2,5,6,8, , , ,]); //[ 1, 2, 2, 5, 6, 6, 8, 8 ]
//evenNums([]); //
//evenNums([2,1,,,]); //[ 2, 2, 2, 1 ]
evenNums([1,3,,]);