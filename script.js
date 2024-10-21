// Array 

//array in js takes the space of twice of length in memory. 

// const arg = ["ram", "hari", 324, ["aar", 223], {name: "hari"},()=>{}];

// console.log(value);
// console.log(typeof value);

//length, push, pop, shift, unshift, toString, join, [], splice, slice, indexOf, includes


const arg = ["ram", "hari", 324, ["aar", 223], {name: "hari"},()=>{}];

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



console.log(value, arg);
//sort, reverse



