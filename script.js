// Array 

//array in js takes the space of twice of length in memory. 

// const arg = ["ram", "hari", 324, ["aar", 223], {name: "hari"},()=>{}];

// console.log(value);
// console.log(typeof value);

//length, push, pop, shift, unshift, toString, join, [], splice, slice, indexOf, includes


// const arg = ["ram", "hari", 324, 33, 4["aar", 223], { name: "hari" }, () => { }];

// const value = arg.length;

// const value = arg[2];

// arg.push("hero"); // adding the data at the last index of the array
// arg.push("hello");


// arg.unshift("first"); ///adding the element at the first index of the array. it takes lots of operation so as a software enginner not recommended

// arg.splice(2, 0, "Sabi"); //adds the new element in the index 2 moving the other elements in their consecutive memory slots


// console.log(value);

//delete

// const value = arg.pop(); 

// deletes the last element from the array and form new array 

// const value = arg.shift(); 

// deletes the first element from the array and form new array 

// const value = arg.splice(3, 2);

//this is forming a new array while deleting the elements from index 3 but keeping the 2 items before index 3. // 2 is number of element  here

// const value = arg.slice(3, 4);

// this is not mutating the original array but is reading the data from the array . here it is reading the data from index 3 to index 4 

// changing the array to string and back to array 

// const value = arg.toString();
// console.log(value);
//it is changing the array to string


// console.log(value.split(","));
//changing the converted array to string back to array using the same separator used in array which is ','
// console.log(arg);


//other way to channge array to string 
// const v1 = arg.join("-");
// console.log(v1);

//changing back to array using split
// const v2 = v1.split("-");
// console.log(v2);
//it is changing back to array from the converted string from array by removing the same separator used to make the array string  




// indexOf(), includes() 

// const v3 = arg.indexOf("ram"); ///giving the index of the item we are providing inside the parenthesis
// console.log(v3);


// const v4 = arg.includes("ram"); //finding out if that item exists in the array and gives output in boolean
// console.log(v4);


//sort, reverse

// console.log(arg.reverse());
//reversing the order of the elements of the array


// console.log(arg.sort());
//it is case sensitive and takes the upper case first while sorting as ASKY standard the lower case char has high value 

//while sorting the function inside the array, it will look after the name of the function and sorts

// in case of the number it looks after the first digit of the num and sorts 


//another way to sort the numbers only not affecting the string and other

// console.log(arg.sort((a, b) => a - b));


// console.log(arg.sort((a, b) => b - a));



///loop

//for

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }


//while

// give the initial value outside of the while loop
// give the condition in the parenthesis

// let j = 10;

// while (j > 0) {
//     console.log(j);
//     j--;
// }

// do while

// let k = 0;

// do {
//     console.log(k);
//     k++;
// } while (k < 10)



//continue
// let l = 0;

// do {
// console.log(l);
//     l++;
// } while (l < 10)


//break





// Javascript specific array loop

// const array = ["ram", "hari", 324, 33, 4["aar", 223]];

// console.log(array);

// const item = array[2];
// console.log(item);


// for loop in array

// for (let a = 0; a < array.length; a++){
//     console.log(array[a]);

// }



//create an array of 50 random numbers from 0 to 100 programmatically.


///creating the array of 50 random numbers in between 0 and 100
// const array = [];
// for (let i = 1; i < 50; i++) {
//     const result = Math.floor(Math.random() * 100) + 1;
//     // console.log(result);

//     array.push(result);
// }

// console.log(array);




// // ascending and descending order

// //ascending order
// const orderAscend = array.sort((a, b) => a - b)
// console.log(orderAscend);

// //descending order
// const orderDescend = array.sort((a, b) => b - a)
// console.log(orderDescend);


// even and odd

//even
// const even = array.filter((item, i) => item % 2 === 0);
// console.log(even);

// //odd
// const odd = array.filter((item, i) => item % 2 === 1);
// console.log(odd);




// //sum of all of the numbers inside the array

// const sum = array.reduce((acc, item) => acc + item, 0);
// console.log(sum);


//unique random numbers

// const unique = [];

// for (let i = 0; unique.length < 50; i++) {

//     //only unique number 

//     const num = Math.floor(Math.random() * 100) + 1;

//     if (!unique.includes(num)) {
//         unique.push(num);
//     }
//     console.log(i);

// }

// console.log(unique);



////OBJECT

// const obj = {
//     name: "Ram",
//     phone: 23084,
//     isStudent: true,
//     skills: ["html", "css", ["react", "redux"], "js"],
//     parent: {
//         f: "harry",
//         m: "mary",
//     },
//     bio: () => {
//         return "Hello";
//     },
// }

// console.log(obj);



///read the properties of object

// const value = obj.name;

//const value = obj["name"];   ///other way to read property

// const value = obj.skills[2];

// const value = obj.parent.m;

// const value = obj.bio();

// console.log(value);




//updating the value of the property of the object

// obj.name = "Shyam";
// obj.skills.push("React"); //updating the array inside the object


///delete the value or property

// delete obj.name; //deletes the property
// obj.name = undefined; // its not good to mutate the original object so we normally use this one to delete the property 

// obj.skills[2].pop("redux");

// console.log(obj);


// ///
// function customReduce(nums, fn, init){
//     let val = init;

//     for(let i = 0; i<nums.length; i++){
//         val = fn(val + nums[i]);
//     }

//     return val;
// }

// const nums = [ 2,3,3544,45,4];
// const summ = (a,b) => a + b;
// console.log(customReduce(nums, summ, 0));

// 1. Array Manipulation
// Create an array of your favorite fruits. Write a function that takes this array and returns a new array with only the fruits that start with the letter "A".
// const favFruits = ["Apple", "Orange", "Banana", "Guava"];

// const newArg = favFruits.filter((item, i) => item.includes("A"));
// console.log(newArg);


// // Basic Function Questions
// // Create a Function to Add Two Numbers: Write a function named add that takes two numbers as arguments and returns their sum.

// function add(a, b) { return a + b };
// console.log(add(2, 3));



// Convert Celsius to Fahrenheit: Write a function named celsiusToFahrenheit that converts a temperature from Celsius to Fahrenheit.

// function celsiusToFahrenheit(c){
//     return (9/5 * c) +32;
// }

// console.log(celsiusToFahrenheit(0));


// Check Even or Odd: Write a function named isEven that takes a number as an argument and returns true if the number is even and false if it's odd.
// function isEven(num){
//     return num % 2 === 0
//     ?true
//     :false /// in ternary operator, dont forget to use the keyword 'return' like this before the condition 
// }
// console.log(isEven(4));


// Find the Maximum of Three Numbers: Create a function named maxOfThree that takes three numbers as arguments and returns the largest of the three.
// function maxOfThree(a,b,c){
//     return Math.max(a,b,c);
// }

// console.log(maxOfThree(3,1,2));

// orrr

//if we dont want to use the Math prebuilt way to find out the max number
// function numbers(a, b, c){
//     if (a > b && a > c){
//         return a;
//     }else if (b > a && b > c){
//         return b;
//     }else{
//         return c;
//     }
// }

// console.log(numbers(3,10,6));

// or

// function num(a, b, c) {

//     const num = [a, b, c];

//     let max = 0;
//     for (let i = 0; i < num.length; i++) {

//         if (num[i] > max) {
//             max = num[i]
//         };
//         console.log(max + " is on process.");
//     }
//     console.log(max + " is the maximum number.");
// }

// num(4, 8, 32);




// Intermediate Function Questions
// Factorial: Write a function named factorial that takes a non-negative integer and returns its factorial.
// let number = prompt("Please enter non-negative number!!!")
// let num = Number(number);

// function factorial(num) {
//     let result = 1;
//     if (num === 1) {
//         result = 1;
//     }
//     for (let i = 2; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// if (num <= 0 || isNaN(num)) {
//     alert("Please enter the non-negative integer!!!")
// } else {
//     console.log(num + " is the number from the user.");
//     console.log(factorial(num) + " is the factorial of " + number);
// }



// Palindrome Check: Create a function named isPalindrome that checks if a given string is a palindrome (reads the same backward as forward).


// let str = prompt("Enter the word to check if is it Palindrome!!!");

// function isNAN(){
//     const num = parseFloat(str);
//     return num;
// }


// let newstr = [];
// function isPalindrome(str) {

//     for (let i = (str.length - 1); i >= 0; i--) {
//         newstr = newstr + str[i];
//     }
//     return newstr;

// }
// console.log(
//     isPalindrome(str));
// if (str === newstr && !isNAN(str)) {
//     console.log(
//         "This is  Palindrome word.");
// }else if(isNAN(str)){
//     alert("Please Enter the word not the number!!!");
//     console.log("This is not even a word. Anyway I have reversed it for you. You are Welcome.");

// } 
// else {
//     console.log(
//         "This is not a Palindrome word.");
// }




// Array Sum: Write a function named sumArray that takes an array of numbers and returns the sum of all the elements.
// let arg = [3, 2, 5];
// function sumArray(arg) {
//     return arg.reduce((acc, item) => acc + item, 0);
// }
// console.log(sumArray(arg));


// Fibonacci Sequence: Write a function named fibonacci that takes a number n and returns the first n numbers of the Fibonacci sequence in an array.

// first n numbers of the fibonacci seq

// let n = 8;

// function fibonacci(n){
//     let firstN = [0,1];
//     let a = 0, b = 1, sum;
//     if(n<=0){return []}
//     if(n === 0){return 0}
//     if(n === 1){return 1}

//     for(let i = 2; i<n; i++){
//         sum=a+b;
//         a=b;
//         b=sum;

//         firstN.push(sum);
//     }
//     return firstN;
// }
// console.log(fibonacci(n));




// Advanced Function Questions
// Count Vowels in a String: Create a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in it.

// Remove Duplicates from an Array: Write a function named removeDuplicates that takes an array and returns a new array with duplicate values removed.

// Merge Two Arrays: Write a function named mergeArrays that takes two arrays and returns a new array that combines both arrays without duplicates.

// Sort an Array of Objects: Create a function named sortByAge that takes an array of objects with a name and age property and returns the array sorted by age.

// Bonus Challenge
// Debounce Function: Implement a debounce function that takes another function and a delay in milliseconds, returning a new function that, when called, will delay the execution of the original function until after the delay has passed since the last time it was invoked.













// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



// const nums = [4,23,56,34]
// const target = 57;

// function twoSum(nums){
//     for(let i = 0; i<nums.length; i++){

//         for(let j = i + 1; j < nums.length; j++){
//             if( nums[i] + nums[j] === target){
//                 return[i,j];
//             }
//         }
//     }

// }

// console.log(twoSum(nums));


// ========================================================================




// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// const num1 = [9, 8, 1];
// const num2 = [9, 8];

// function sum(num1, num2) {
//     const output = [];
//     let carry = 0;
//     for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
//         let digit1 = i < num1.length ? num1[i] : 0;
//         let digit2 = i < num2.length ? num2[i] : 0;

//         let result = digit1 + digit2 + carry;

//         if(result >= 10){
//             carry = 1;
//             result -= 10;
//         }else{
//             carry = 0;
//         }
//         output.push(result);
//     }
//     if(carry){
//         output.push(carry);
//     }
//     const finalResult = output.reverse().join("");
//     return finalResult;
// }
// console.log(sum(num1, num2));




// isPalindrome

// const x = 0;

// function isPalindrome(x) {
//     if (x <= 0) {
//         return false;
//     }
//     const strX = x.toString();
//     let result = '';

//     for (i = strX.length - 1; i >= 0; i--) {
//         result += strX[i];
//         // console.log(result);     

//     };
//     return result === strX;
    
// }
// console.log(isPalindrome(x));

// ===================================

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const roman = prompt("Enter the Roman Number");

function romanToInt(roman){
  
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
  let result = 0;
    for(let i = 0; i < roman.length; i++){
        if(obj[roman[i]] === roman.length -1){
            result += obj[roman[roman.length - i]];
        } else if(obj[roman[i]] < obj[roman[i+1]]){
            result = result - obj[roman[i]];
        } else{
            
            result += obj[roman[i]];
        }
       
    }
    
    return result;

}

console.log(romanToInt(roman));