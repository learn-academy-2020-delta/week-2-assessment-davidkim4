// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.


const divisible3 = (number) => {
    //Used a ternary operator rather than an if/else statement. Checks to see if the number argument is evenly divisible by 3 and returns the appropriate string interpolation.
    return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`
}

var num1 = 15
console.log(divisible3(num1));
// Expected output: "15 is divisible by three"

var num2 = 0
console.log(divisible3(num2));
// Expected output: "0 is divisible by three"

var num3 = -7
console.log(divisible3(num3));
// Expected output: "-7 is not divisble by three"





// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalize = (array) => {
    //Capitalizes the very first character of each value/word in the array argument and adds the rest of the word to the right of the capitalized letter, then puts it back into a new array called newArr.
    let newArr = array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
    //Returns the newArr with capitalized letters as a complete array.
    return newArr
}
console.log(capitalize(randomNouns));




// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]
const highestNum = (array) => {
    //create variable newArr that filters through the array argument.
    let newArr = array.filter(value => {
        //if statement to check if the each value in input array is a number.
        if (typeof value === "number") {
            //if it is a number, it will return that number and place it into newArr
            return value
        }

    })
    //sorts all the numbers in order from least to greatest and returns the sorted array. a and b is sets and resets itself to 2 different values in newArr, if a - b is negative then it will sort a before b.
    return newArr.sort((a, b) => a - b)
}
console.log(highestNum(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowelIndex = (string) => {
    //create a new array called stringArr that will transform the argument string into an index value
    let stringArr = string.split("")
    //iterates through each character in stringArr
    for (i = 0; i < stringArr.length; i++) {
        //checks to see if the value at index i is a vowel
        if (stringArr[i] === "a" || stringArr[i] === "e" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u") {
            //if it is a vowel, then it will return the first vowels index position
            return i
        }
    }
}
console.log(firstVowelIndex(vowelTester1));
console.log(firstVowelIndex(vowelTester2));



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) => {
    //Checks to see if num2 argument is 0. If it is, then it will return the string interpolation, else, it will use eval() to combine all 3 arguments into a mathematical calculation.
    //I remembered how to use eval() from week 1 office hours :) 
    return num2 === 0 ? `Can't divide by ${num2}!` : eval(num1 + operator + num2)
}
// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27
console.log(calculator(16, "+", 3))
// Expected output: 19
console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"

const certainWebsite = (array) => {
    //Create new array that filters through each array arguments index values.
    let newArr = array.filter(value => {
        //Checks to see if each index value in array has the string .io.
        if (value.includes(".io")) {
            //Returns entire index value if condition is true
            return value
        }
    })
    //Returns the newArr after checking through each index
    return newArr
}
console.log(certainWebsite(websites));


// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.

const countUp = (num) => {
    //Create a new variable equal to 0.
    let start = 0
    //Continuously loops as long as start is less than num argument.
    while (start < num) {
        //Logs each iteration of the loop.
        console.log(start);
        //Adds 1 to start each loop until it is equal to 1 less than the num argument.
        start++
    }
    //Returns the final number start reached.
    return start
}
console.log(countUp(10));