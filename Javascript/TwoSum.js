/*
var sum_pairs=function(ints, s){
    const potentialMatches = {}
  for (const n of ints) {
        let match = s - n;
        if (match in potentialMatches) {
            return [match, n];
        } else {
      potentialMatches[n] = true;
        }
    };
  return null;
};

//console.log(sum_pairs([11, 3, 7, 5], 10));

console.log(sum_pairs([3, 5, 2, -4, 8, 11] , 7));

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {
  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // calculate S - current element
    var sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];
  }

  // return all pairs of integers that sum to S
  return sums;
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7));
*/
/*
var twoSum = function(nums, target) {
  let indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(nums[i])) return [indexMap.get(nums[i]), i];
    indexMap.set(target - nums[i], i);
  }
};


console.log(twoSum(nums, target));
*/
//const twoSum = (nums, target) => {

var twoSum = function(nums, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const checkedNums = target - nums[i];
    if (checkedNums in hashTable) {
      return [hashTable[checkedNums], i];
    }
    hashTable[nums[i]] = i;
  }
  return null;
};
nums = [11, 3, 5, 4, 8, 6];
target = 10;
console.log(twoSum(nums, target));
