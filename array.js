// var friendsAge = [12, 20, 34, 11, 33, 24];
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// var gods = ['Osho', 'Mahavir', 'Goutam', 'Kabir', 'Rumi', 'Shams'];

// 1. TO SEE AN ARRAY............

    // console.log(friendsAge);

// 2. TO KNOW THE LENGTH OF AN ARRAY ........

    // console.log(friendsAge.length);
    // console.log(vowels.length); 


// 3. TO KNOW THE INDEX OF AN ARRAY ........
// method-1 


    // var oshoNum = gods.indexOf('Osho');
    // console.log(oshoNum);

    // var rumiNum = gods.indexOf('Rumi');
    // console.log(rumiNum);
    
    
// method-2    
    // console.log(gods.indexOf('Osho')); 
    

// 4.  TO KNOW ELEMENTS POSITION ......
// first method 

        // console.log(gods[3]);


// second method    
        //  var secondPlace = gods[1];
        // console.log(secondPlace);
        
       
// 5. ADD ELEMENTS BY INDEX NUMBER.... 

            //  console.log(gods);
            // gods[2] = "GautamBddha";
            // gods[5] = 'Shams-Tabrizi';
            // console.log(gods);
            // console.log(gods);

  
            
            // 6.... ADD OR REMOVE ELEMENTS WITH PUSH AND POP... 
            
            
            
// var langs = ['html', 'css', 'java', 'javascript', 'python']; 


// console.log(langs);

// PUSH adds element to the end...
                // langs.push('C++', 'rubi');
                // console.log(langs);

// POP removes An elements from end ......

            // console.log(langs);

            // langs.pop();
            // console.log(langs);
            

        //... 7... ARRAY WITHIN A LOOP .... LOOP AND ARRAY ... ARRAY AND LOOP...........
            
// example-1 
            // for(i=0; i<langs.length; i++){
            //     console.log(langs[i]);
            // }
            

// example-2 

// var signal = ['green', 'yellow', 'red'];
//         for (i = 0; i < signal.length; i++){
//                     if (signal[i] == 'green') {
//                         console.log('Go on');
//                     }
    
//     else if (signal[i] == 'yellow') {
//         console.log('Please,WAIT');
//             }
                
//                 else {
//                     console.log('STOP!');
//                 }

// }


                // 8. ARRAY AND CONDITIONAL ................  if an element exists or not...


// var langs = ['html', 'css', 'java', 'javascript', 'python']; 

//              // Ex-1 . . .

// if (langs.indexOf('css') != -1) {
//     console.log('Wow! I got it!');
//     console.log('Index of that banchod is:', langs.indexOf('css'));
// }


            // Ex - 2..... 

// if (langs.indexOf('fortran') == -1) { // put any name instead of fortran , and check....
//     console.log('fortran does not exists');
// }
// else {
//     console.log('The Index of fortran is:', langs.indexOf('fortran'));
// }


            // 9. SUM OF ALL NUMBERS IN AN ARRAY .. . . 

// var numbers = [456, 573, 67, 693, 894, 234];

// EX-1

// var addition = 0; // if it is declared within the loop, each time program is running, will make its value zero.
// for (i = 0; i < numbers.length; i++){
    
//     addition = addition + numbers[i]; // no need to declare it 'var or cont' anymore.
//     //Don't declare const within a loop
// }
// console.log('The addition is:', addition);



// EX-2   . .  .   Same problem with function .. . . . . . . . .


    //parameter will take the array name.



// function arrayTotal(numbers) {
//     let addition = 0;
//     for (i = 0; i < numbers.length; i++){
//         addition = addition + numbers[i];
//         // DON'T DECLARE 'return' WITHIN THE LOOP... OTHERWISE, YHE LOOP WILL RETURN THINGS ONCE EXECUTED..
//     }
//     return addition;
// }
// const numbers = [2, 3, 6, 5, 4, 8, 7];

// method-1
// const summation = arrayTotal(numbers);
// console.log(summation);

// method-2
// const summation = arrayTotal([2, 3, 6, 5, 4, 8, 7]);// here,THE ARRAY TAKES THE parameter name 'numbers' itself.
// console.log(summation);

                // 10. LARGEST NUMBER OF AN ARRAY WITH FUNCTION
    
// function getLargestElement(numbers) {
//     let largestAge = numbers[0];
//     for (i = 0; i < numbers.length; i++){
//         let element = numbers[i];
//         if (element>largestAge) {
//             largestAge = element;
//         }
//     }
//     return largestAge;
// }

// const ages = [34, 25, 76, 12, 89, 47, 23, 45];
// const oldest = getLargestElement(ages);
// console.log('oldest:', oldest);

            // FIND SMALLEST NUMBER FROM AN ARRAY . . . . . . 

// function getSmallest(arr) {
//     let smallestNumber = arr[0];

//     for (i = 0; i < arr.length; i++){
//         if (smallestNumber > arr[i]) {
//             smallestNumber = arr[i];
//             //console.log(smallestNumber);
//         }
//     }
//     return smallestNumber;
// }

// const arr = [2, 5, -7, -28, 57, 83, -45, 5];
// const smallest = getSmallest(arr);
// console.log(smallest);

