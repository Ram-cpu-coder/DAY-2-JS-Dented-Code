// Array 

//array in js takes the space of twice of length in memory. 

// const arg = ["ram", "hari", 324, ["aar", 223], {name: "hari"},()=>{}];

// console.log(value);
// console.log(typeof value);

//length, push, pop, shift, unshift, toString, join, [], splice, slice, indexOf, includes


const arg = ["ram", "hari", 324, 33, 4 ["aar", 223], {name: "hari"},()=>{}];

// const value = arg.length;

// const value = arg[2];

arg.push("hero"); // adding the data at the last index of the array
arg.push("hello");


arg.unshift("first"); ///adding the element at the first index of the array. it takes lots of operation so as a software enginner not recommended

arg.splice(2, 0, "Sabi"); //adds the new element in the index 2 moving the other elements in their consecutive memory slots


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

const value = arg.toString();
console.log(value);
//it is changing the array to string


console.log(value.split(","));
//changing the converted array to string back to array using the same separator used in array which is ','
console.log(arg);


//other way to channge array to string 
const v1 = arg.join("-");
console.log(v1);

//changing back to array using split
const v2 = v1.split("-");
console.log(v2);
//it is changing back to array from the converted string from array by removing the same separator used to make the array string  




// indexOf(), includes() 

const v3 = arg.indexOf("ram"); ///giving the index of the item we are providing inside the parenthesis
console.log(v3);


const v4 = arg.includes("ram"); //finding out if that item exists in the array and gives output in boolean
console.log(v4);


//sort, reverse

console.log(arg.reverse());
//reversing the order of the elements of the array


console.log(arg.sort());


//while sorting the function inside the array, it will look after the name of the function and sorts

// in case of the number it looks after the first digit of the num and sorts 


//another way to sort 

console.log(arg.sort((a,b)=>a-b));


console.log(arg.sort((a,b)=>b-a));