// Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

 /************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// {
//     console.log("John ist älter.");
// }
// else
// {
//     console.log("John ist jünger.");
// }


/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// const firstName = "Jane";
// let job;

// job = "driver";      // .. fährt TAXI! / UBER
// job = "diver";       // .. taucht im Rhein!
// job = "artist";      // .. malt ein Bild!
// job = "pilot";       // .. macht etwas anderes! --> default
// job = "teacher";     // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

// switch(job)
// {
//     case "driver":
//         console.log(firstName + " fährt TAXI! / UBER");
//         break;
//     case "diver":
//         console.log(firstName + " taucht im Rhein");
//         break;








//     default:
//         console.log(firstName + " macht etwas anderes!");
//         break;
// }


/******** Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const value = 10;

switch (cond) {
    case (value == 1):
        console.log("case 1.");
        break;
    case (value == 2):
        console.log("case 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}