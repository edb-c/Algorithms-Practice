/*
Convert a non-negative integer to its english words representation. 
Given input is guaranteed to be less than 2^31 - 1.
*/
const onesDigits = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];
const tensDigits = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];
const sections = ["", "Thousand", "Million", "Billion"];

const numberToWords = num => {
  let finalWords = "";
  let numData = getPlaceValues(num);
  //console.log(numData.length);
  //console.log(numData[0].digits);
  //getWords(numData);
  //console.log("num is", num)
  
  if (num == 0) {
      finalWords = "Zero";
  }
      
    
  switch (numData.length) {
    case 1:
      //console.log("Process Hundreds");
      //console.log(numData)
      finalWords = getWords(numData[0]);
      break;
    case 2:
      //console.log("Process Thousands");
      //console.log(numData)
      finalWords = getWords(numData[1]) + " Thousand ";
      finalWords += getWords(numData[0]);
      break;
    case 3:
      //console.log("Process Millions");
      finalWords =  getWords(numData[2]) + " Million ";
      finalWords += getWords(numData[1]) + " Thousand ";
      finalWords += getWords(numData[0]);
      break;
    case 4:
      //console.log("Process Billions");
      finalWords =  getWords(numData[3]) + " Billion ";
      finalWords += getWords(numData[2]) + " Million ";
      finalWords += getWords(numData[1]) + " Thousand ";
      finalWords += getWords(numData[0]);
      break;
    default:
      //console.log("Switch Error");
      break;
  } //end switch

  //console.log( 'The number ' + num + ' in words is ' + finalWords + ".");
    return finalWords;
}; //end numberToWords

const getPlaceValues = num => {
  let placeValues = [];
  let digits = 0;
  //  let section = 0;

  while (num >= 1) {
    digits = getModulus(num);
    //  section++;
    // console.log(digits);
    // console.log(section);
    //  placeValues.push({ digits: digits, section: section });
    placeValues.push({ digits: digits });
    num = num / 1000;
  } //end

  //console.log(placeValues);
  return placeValues;
};

const getModulus = num => {
  let modulus = 0;
  modulus = num % 1000;
  return Math.trunc(modulus);
};

const getWords = numData => {
  //console.log("In getWords")
  let words = "";
  if (numData.digits >= 100 && numData.digits <= 999) {
    
    //console.log(onesDigits[Math.trunc(numData.digits / 100)]);
    words = onesDigits[Math.trunc(numData.digits / 100)] + " Hundred";
      
    let rem10 = numData.digits % 100;
    console.log("rem10", rem10)
      
      if (rem10 > 0 && rem10 <= 20) {     
      words += " " + onesDigits[rem10];
    } else {
      console.log("b", rem10);
      //console.log("1tens", tensDigits[Math.trunc(rem10 / 10)]);
      let rem1 = rem10 % 10;
      if (rem1 > 0) {
          words += " " +  tensDigits[Math.trunc(rem10 / 10)];
          words += " " + onesDigits[rem1];
      }
    }
  }

  if (numData.digits >= 20 && numData.digits <= 99) {
    //console.log(tensDigits[Math.trunc(numData.digits / 10)]);
    //console.log(onesDigits[numData.digits % 10])
    words = tensDigits[Math.trunc(numData.digits / 10)];
    if (numData.digits % 10 > 0) {
      words += " " + onesDigits[numData.digits % 10];
    }



  }

  if (numData.digits < 20) {
    //console.log(onesDigits[numData.digits]);
    words = onesDigits[numData.digits];
  }
  
 
  return words;

};

//let num = 1234567890;
let num = 19;
console.log(numberToWords(num));
