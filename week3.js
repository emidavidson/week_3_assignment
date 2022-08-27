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


let total = 0
for (let i = 0; i < ages.length; i++){
total = total + ages[i];
}

console.log(total / ages.length);

//2.	Create an array called names that contains the following 
//values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob" ];
console.log(names);

//a.	Use a loop to iterate through the array and calculate the average number of 
// letters per name. Print the result to the console.

let letterAverage = 0
for (let i = 0; i < names.length; i++){
    letterAverage = letterAverage + names[i].length
}
console.log(letterAverage / names.length);

//b.	Use a loop to iterate through the array again and concatenate all the names together, 
//separated by spaces, and print the result to the console.

let list = (names)
for (let i = 0; i < 1; i++){
    list = names.join(" ");
}
console.log(list);


// 3.	How do you access the last element of any array?

// Using the pop() method we can access the last element in an array. It returns the last element by removing it from the array. The last element would also be refered to as index[array.length - 1]

// 4.	How do you access the first element of any array?

//The shift() method will remove the first element of an array and return it. you can also refer to the first element as index[0].

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously 
// creates names array and add the length of each name to the namesLength array.

var nameLengths = [names.length]
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}
console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sum = 0 
for (i = 0; i < names.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function homeworkTakes(word, n){
    let x = '';
    for (let i = 0; i < n; i++){
        x += word
    }
    return x;
}
console.log(homeworkTakes("Effort,", 6))

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function createFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
createFullName("Emily", "Davidson")

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var array = [27, 48, 19, 77]

function trueOrFalse(array){
    var sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }if (sum > 100){
        return true
    }else{
        return false
    }
}
console.log(trueOrFalse(array));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

var arr = [3, 4, 5, 6, 7]

function totalAverage(arr){
    var total = 0
    for (let i = 0; i < arr.length; i++)
    total += arr[i];
}
var average = total / arr.length;

console.log(average / arr.length);

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

var arrayOne = [5, 6, 7]
var arrayTwo = [1, 2, 3]

function compareAverage(arrayOne, arrayTwo){

    var sum1 = 0 
    for (let i = 0; i < arrayOne.length; i++){
        sum1 = sum1 + arrayOne[i];
    }

    var sum2 = 0
    for (let i = 0; i < arrayTwo.length; i++){
        sum2 = sum2 + arrayTwo[i];
    }

    var avgOne = sum1 / arrayOne.length;
    var avgTwo = sum2 / arrayTwo.length;

    if (avgOne > avgTwo){
        return true
    }
}

console.log(compareAverage(arrayOne, arrayTwo));


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var temperature = [80]
var moneyInPocket = [12]

function willBuyDrink(temperature, moneyInPocket){
    if (temperature >= 80 && moneyInPocket >= 10.50){
        return true
    }else{
        return false
    }
}
console.log(willBuyDrink(temperature, moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does 
// and why you created it.

const soil = 'wet';

function waterPlants(soil){
    if (soil === 'wet'){
        console.log('do not water');
    }
    if (soil === 'dry'){
        console.log('water');
    }
}
console.log(waterPlants(soil));

// I created this function to assist in deciding whether or not to water a plant! //