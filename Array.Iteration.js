/*
Iteration is the process of accessing each of the item contained within a
given data structure
Some common ways of iterating include :
    *for
    *while
    *for (in)
    *for (of)
    *forEach()

*/

// for loop is the most common type
//for(variables, condition, modification)
for (let i=0; i<10; i++){
    console.log(`Life is better with ${i}`);
    
}
// Array implementation
let array = [1, 2, 3, 4, 5];
for (let i = 0, len=array.length; i<len; i++){
    console.log('Looping thru array elements', array[i])
}

//implementation using while loop
let counter = 0;
while (counter<array.length){
    console.log('Hello looping ' + array[counter]);
    counter++;
}

//for in loop
// Calling the indices one by one

let sth = ['You', 'are', 'awesome', 'today']
//to print the indices
for (let index in sth){
    console.log(index)
}
//to print indices content
for (let index in sth){
    console.log(sth[index])
}
//for of iteration
for (el of sth){
    console.log(el)
}

//forEach()
//cannot breakout of iteration or skip an element 'it's expressive'
//It takes a function
let array1 = [ 'Tomorrow', 'will', 'be', 'better' ]
array1.forEach((ele, index) => console.log(ele))
array1.forEach(function(elem, index){console.log(array1[index]) })

//The end of Array iteration/looping for today





