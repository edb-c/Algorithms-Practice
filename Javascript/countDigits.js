let numDigits = 0;
let num = 1234567891;
while (num > 1) {
    console.log(num)
  num = num / 10
  numDigits = numDigits + 1
}

console.log(numDigits)