// Function is a block of code....
// Example-1

        // function startFan() {
        //     console.log('Go to the switch'); //curly bracket contains commands to perform.
        //     console.log('tap switch');
        // }

        // startFan();
        

// Example-2..  FUNCTION PARAMETER .....

                // function mul(p1, p2) {
                //    console.log('multiplication:', p1 * p2); // CAUTION- COMMA BEFORE PARAMETER...
                // }

                // mul(5,4);

// Example-3... use of return keyword..

// function getReminder(num1, num2) {
//         return num1 % num2; // remove 'return' keyword and run the code...
       
// }

// const reminder = getReminder(12, 2);
// console.log(reminder);


// example-4 ... checking data typeof....

// function addNumber(number1, number2) {
//         return 'Result is ' + number1 + number2;
//         // return number1 + number2; remove comment and run.
// }

// var result = addNumber(10, 12);
// console.log(result);
// console.log(typeof(result));

                        //5. INCHE TO FEET BY Function.... 


// function inchToFeet(inch) {
//         let feet = inch / 12;
//         return feet;
//     }
    
//     var myInches = 135;
//     var feet = inchToFeet(myInches);
//     console.log(feet);
    
//     var dadaInches = 822;
//     var feet = inchToFeet(dadaInches);
//     console.log(feet);
    
//     var nanaInches = 190;
//     var feet = inchToFeet(nanaInches);
//     console.log(feet);
    

// 6. eXAMPLE ... Even and odd determiation... 

// function isEven(number) {
//         if (number % 2 == 0) {
//                 // console.log('The number is even');
//                 return true;
//         }
//         else {
//                 return false;
//         }
// }


//         console.log(isEven(145));


                        // 7. Example- Know the factorial of a Number.... 

// function getFactorial(number) {
//         var factorial = 1;
        
// for (i = 1; i <= number; i++){
//         // var factorial = 1; Remove comment and see!
//     var factorial = factorial * i;
//     }
//     return factorial;
// }


// var product = getFactorial(10);
// console.log('Factorial of given number is:', product);


// 8. GET FACTORIAL USING decrementing WHILE LOOP...... Can be done with for loop, too.

// function getFactorial(number) {
//         let factorial = 1;
//         let i = number;
//         while (i >= 1) {
//                 factorial = factorial * i;
//                 i--;
//         }
//         return factorial;
// }

// let product = getFactorial(4);
// console.log(product);



        //9. write a program using function to get leap year!!! 

// function getLeapYear(year) {
//         if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//                 console.log('Leap Year');
//                 }
//                 else{
//                 console.log('Not Leap Year')
//         }
//         return year;
// }
        
// getLeapYear(4800);

                        // 10. COMPOUND INTEREST CALCULATION.... 

// function getInterest(capital, year, percentage) {
//         let interestWithCapital = capital * ((1 + percentage) ** year);
//         let total1 = interestWithCapital.toFixed(2);
//         console.log('Interest with capital is', total1);

//         let onlyInterest = interestWithCapital - capital;
//         let total2= onlyInterest.toFixed(2);
//         console.log('The Interest is', total2);

//         return;
// }

// getInterest(5900, 4, 0.08);
