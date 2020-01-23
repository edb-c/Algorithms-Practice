// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
/*
function vowels(str) {

  let count = 0;
  const vowelList = ['a','e','i','o','u'];

  for (let char of str.toLowerCase()){
    if (vowelList.includes(char)) {
        count++;
    } //end if
  } //end for
    
  console.log(count);
} //end function
vowels('Hi There!');  
*/

//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
/*
const vowels = ["a", "e", "i", "o", "u"]

var count = 0;

function countVowelsRecursive(text) {

    if(vowels.includes(text[0].toLowerCase())) {
        count++;
    }

    if(text.length == 1){
        console.log(`The inputted text contains ${count} vowel(s).`);
        return count;
    } else {
        console.log(text.substr(1));
        countVowelsRecursive(text.substr(1));

    }
}

countVowelsRecursive('The quick brown fox jumped hastily.');
//countVowelsRecursive('Te');
*/
function vowels(str) {

    const matches = str.match(/[aeiou]/gi);
      console.log( matches ? matches.length : 0 );
    
}//end function
vowels('Hi There!');  

module.exports = vowels;
