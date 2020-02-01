// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

function reverseInt(n) {
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
      
    console.log(parseInt(reversed) * Math.sign(n));
    return parseInt(reversed) * Math.sign(n);
  }

  module.exports = reverseInt;
  
  reverseInt(1534236469);