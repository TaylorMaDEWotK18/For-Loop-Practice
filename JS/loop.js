// for (let x = 0; x < 10; x += 1 ) {
//         console.log(x);
// }

// function getRandomNumber(upper) {
//     return Math.floor( Math.random() * upper ) + 1;
// }

// // There are 3 arguements that go in the parathesis

// 1) The first is the declaration of the counter, this part only runs once before the loop begins
//     - ( x = 0;

// 2) Next comes the condition. The condition gets evaluated BEFORE the loop runs each time
//     - ( x = 0; x < 10)

// 3) The last component of the for loop updates the counter each time through the loop. This counter gets evaluated and updated at the end of each loop iteration. 
    // - ( x = 0; x < 10; x += 1) (OR x++(increment operator))

// 4) Finally inside the code block is the code that runs each time the condition `( x < 10 )` evaluates TRUE
    // for ( x = 0; x < 10; x += 1) {
    //     console.log(`The ramdom number is ${getRandomNumber(100)}`);
    // }

    for ( x = 5; x <= 100; x += 1) {
        console.log(x); 
       }