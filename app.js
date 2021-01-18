'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line

    // console.log(a,b)
    var summ = a + b
    var sumWrite = "The sum of " + a + " and "+ b + " is " + summ + "."
    var ansArray = [summ, sumWrite]
    return ansArray

}
testSum(4,7);

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    
    var ansArray = []
    var summMultiple = a*b
    var summWrite = ("The product of " + a +" and " + b + " is " + summMultiple + ".")
    ansArray.push(summMultiple)
    ansArray.push(summWrite)
    
    
    return ansArray

    
    
}
testMultiply(5,9);


// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

        var array = [a, b, c]
        var solutionArrayChecker =[]
        // console.log(array)

    var sumSolutionarray = []
    var sumSolutionAns= 0
        for (let i = 0; i < array.length; i++) {

            sumSolutionarray = (sum(array[i], sumSolutionAns))
            sumSolutionAns = sumSolutionarray[0]
            // console.log(sumSolutionAns)
            
        }

    var multiplySolarray = []
    var multiplySolAns = 1
        for (let i = array.length -1; i >=0; i--) {
            
            multiplySolarray = (multiply(array[i], multiplySolAns))
            multiplySolAns = multiplySolarray[0]

        }

        var additionWrite =  a + ' and ' + b + ' and ' + c + ' sum to ' + sumSolutionAns + '.'
        var multiWrite = 'The product of ' + a + " and " + b + " and " + c + " is " + multiplySolAns + '.'
    

        solutionArrayChecker.push(sumSolutionAns)
        solutionArrayChecker.push(multiplySolAns)
        solutionArrayChecker.push(additionWrite)
        solutionArrayChecker.push(multiWrite)
        
        return(solutionArrayChecker)



}
testSumAndMultiply(4, 7, 5)


// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    
    var sumSolutionarray = []
    var sumSolutionAns= 0

        for (let i = 0; i < sumArr.length; i++) {

            sumSolutionarray = (sum(sumArr[i], sumSolutionAns))
            sumSolutionAns = sumSolutionarray[0]
    }

    var solutionArrayChecker  =[]
    var sumWrite = sumArr[0] + ',' + sumArr[1] + ',' + sumArr[2] + ' was passed in as an array of numbers, and ' + sumSolutionAns + ' is their sum.'
    solutionArrayChecker.push(sumSolutionAns)
    solutionArrayChecker.push(sumWrite)

    return solutionArrayChecker

}
testSumArray(testArray)

// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/


// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

    var multiplySolarray = []
    var multiplySolAns = 1

        for (let i = multArr.length -1; i >=0; i--) {
            
            multiplySolarray = (multiply(multArr[i], multiplySolAns))
            multiplySolAns = multiplySolarray[0]
        }

        var multiWrite = 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + multiplySolAns + '.'
        var solutionArrayChecker  =[]
        solutionArrayChecker.push(multiplySolAns)
        solutionArrayChecker.push(multiWrite)

        return solutionArrayChecker
        
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:
"The numbers 1,2,3,4,5 have a product of 120."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.
This function should be dynamic, accepting an array of any length.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

    var multiplySolarray = []
    var multiplySolAns = 1

        for (let i = dynamicArray.length -1; i >=0; i--) {
            
            multiplySolarray = (multiply(dynamicArray[i], multiplySolAns))
            multiplySolAns = multiplySolarray[0]
        }
        var multiWrite = 'The numbers ' + dynamicArray[0] + ',' + dynamicArray[1] + ',' + dynamicArray[2] + ',' + dynamicArray[3] + ',' + dynamicArray[4] + ' have a product of ' + multiplySolAns + '.'
        var solutionArrayChecker  =[]
        solutionArrayChecker.push(multiplySolAns)
        solutionArrayChecker.push(multiWrite)
        return solutionArrayChecker
        

}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.

