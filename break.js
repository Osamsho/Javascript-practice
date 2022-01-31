
// var i = 0;
// while (i < 10) {
//     console.log(i);
//         if (i == 5) {
//             break;
//         }
//     i++;
// }

// SAME RULE FOR 'FOR' LOOP ..


// BREAK FOR Array...

var numbers = [54, 35, 21, 76, 98, 23, 101, 45, 67, 110];

//             for (i = 0; i < numbers.length; i++){
//                 var number = numbers[i];
//                 //console.log(number);

//                 if (number > 90) {
//                     break;
//                 }
//                 console.log(number);
//             }

// CONTINUE is equivalent to SKIP ... continue; 'continue' skipps the matched-condition..

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
   //console.log(number);
    
    if (number > 90) {
        continue;
    }
    console.log(number);
    
}


