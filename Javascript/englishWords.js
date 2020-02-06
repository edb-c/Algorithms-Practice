const LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
    if(num === 0) {
        return 'Zero';
    }
    let thousandCounter = 0;
    let result = '';
    
    while(num > 0) {
        if(num % 1000 != 0) {
            console.log("here",num, num % 1000)
            result = numToString(num % 1000) + THOUSANDS[thousandCounter] + ' ' + result;
        }
        console.log("num",num, "result", result)
        num /= 1000;
        num = Math.trunc(num);
        thousandCounter++;
        console.log("tc", thousandCounter)
    }
    console.log(result);
    console.log(result.trim());
    return result.trim();
};

function numToString(num) {
    if (num === 0)
        return '';
    else if (num < 20){
        console.log("a", LESS_THAN_20[num] + " ")
        return LESS_THAN_20[num] + " ";
        }
    else if (num < 100) {
        console.log("b",Math.trunc(num / 10), num, TENS[Math.trunc(num / 10)] + " " + numToString(num % 10))
        return TENS[Math.trunc(num / 10)] + " " + numToString(num % 10);
        }
    else
        {
            console.log("c", LESS_THAN_20[Math.trunc(num / 100)])
        console.log("c", LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100))
        return LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100);
        } 
    }
console.log(numberToWords(242));