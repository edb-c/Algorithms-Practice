/*
Write a program that checks whether an integer is a palindrome.
Can you solve it without using strings?
ie. 678
*/
const num = 678;

let palidromicInteger = (num) => {
    let temp = num;
    let reversedNum = 0;

    reversedNum = (temp % 10) 
    temp = temp / 10
    reversedNum += (temp % 10) * 10 
    console.log(reversedNum, temp)

}

palidromicInteger(num);