// 1.	Create an array called ages that contains... //
var ages=[3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array// 
// (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). //
//Print the result to the console.//

console.log(ages.pop() - ages.shift());
console.log(ages);

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic//
// (works for arrays of different lengths).//

ages.push(27);
console.log(ages);
console.log(ages.pop() - ages.shift());
console.log(ages);

//c. Use a loop to iterate through the array and calculate the average age. //
// Print the result to the console. //

function averageAge(ages){
    let average = 0;
    for (let i = 0; i < array.length; i++){
        let currentNum = array[i]
        average += currentNum;
    }
    average = average / array.length
    return average;
}
averageAge(ages);
