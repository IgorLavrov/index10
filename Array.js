const Numbers= [2,4,8,8,6,9];

//filter():it returns n array containing all the 
// element that return true to a particular rule.
const evenNumbers= Numbers.filter(number=>number %2==0);
const oddNumbers= Numbers.filter(number=>number %2 !=0);


console.log('even numbers',evenNumbers);
console.log('odd numbers',oddNumbers);


//forEach(): Its very much like a regular for loop but
// with the additional ability of being able to use callbacks.

// let i=0;
// numbers.forEach(num =>{
//     console.log(numbers.toSring());
// });


// map():this method is used for transforming elements in an array

Numbers.map(number=>{
    if(Numbers.indexof(number)===0){
    console.log('First number:${number};');
continue;
}
if(Numbers.indexof(number)===1){
    console.log('Second number:${number};');
continue;}
if(Numbers.indexof(number)===Numbers.length-1){
    console.log('Last number:${number};');
continue;}
return 'Next number:${number}';

});
console.log(numberStrings);
