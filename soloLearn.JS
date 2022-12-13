/**
 * Math Operators

In the office, 2 monitors are connected to each computer.
The first line of the given code takes the number of computers as input.

Task
Complete the code to calculate and output the number of monitors to the console.

Sample Input
10

Sample Output
20

Hint
Since each computer has 2 monitors, simply multiply the count of the computers by 2.
Use the multiplication operator (*).
 */

var computers = parseInt(readLine(), 10)

//your code goes here
console.log(computers * 2)

/**
 * Math Operators

There are a lot of situations where you want to check someone’s age...not just at the bar!

You are given a program that takes the age of the user as input.
Complete the code to check if the user is an adult, and output to the console the corresponding boolean value.

Sample Input
20

Sample Output
true
If the user is 18 or older, they’re considered an adult.
console.log(20>18) outputs true.
 */

function main() {
    var age = parseInt(readLine(), 10)
    //Your code goes here
    console.log(age >= 18)
}