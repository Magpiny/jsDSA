// Inserting elements into an array
// here we have push(), unshift()
// This methods normally returns the total no. of elements / items in arrayand not the added items as in the case of deletion where deleted item is returned

/* here we go 
   array.push() inserts afterb5he last index in an array
 */
array = [ 34, 56, { month : 'October' }, 'Hello December' ]
console.log(array.push(100)) //5   [34,56,{month:'October'},'Hello December,100]

/*
array.unshift() insert before the first element in an array
*/
array.unshift('wow') //6 ['wow', 56, {month:'October'}, 'Hello December',100]
console.log(array);

/*
Time complexity for this operation is 0(1) in theory
Howevever it should be noted that this depends on js engine that runs the code
*/
