// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0;
    let maxChar = '';

    const charMap = {};

//Build Character Map 
//for each character of the string, check if charMap = char
//if so, increment 
    for (let char of str){  
       //if we already have a character here, increment by 1
        if (charMap[char]) { 
            console.log(charMap[char]);
            charMap[char] ++;
            } else {
            charMap[char] = 1;

            console.log(charMap);
            console.log(Object.keys(charMap));
            console.log(Object.values(charMap));
            }; //end if
        }; //end for

    
//Loop to iterate through objects, char is assigned the keys of the object
// USE FOR-IN syntax to iterate through an object
    for (let char in charMap) { 
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        } //end if
      } //end for        
    console.log(maxChar);
    return maxChar;

} //end function
maxChar("afbcccccccd");
module.exports = maxChar;
