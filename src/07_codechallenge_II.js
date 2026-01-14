/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */
// const prompt = require('prompt-sync')({sigint: true});

// let name = prompt("Name? ")
// let age
// age = prompt("Alter? ")
// let num1 = parseInt(age)

// switch(num1)
// {
//     case "num1 < 6" :
//         console.log(name + " trinkt Milch.");
//         break;
//     case "num1 < 13":
//         console.log(name + " trinkt Saft.");
//         break;
//     case "num1 <18":
//         console.log(name + " trinkt Cola.");
//         break;
//     case "num1 >17":
//         console.log(name + " trinkt Wein.");
//         break;
// }


/* Getränke-Challenge */
const prompt = require('prompt-sync')({sigint: true});

let name = prompt("Name? ")
let age = prompt("Alter? ")
let num1 = parseInt(age)

if(num1 < 0)
{
    console.log("Das Alter kann nicht negativ sein!")
}
else 
{
    if (num1 < 6)
    {   
        console.log(name + " trinkt Milch.");
    }

    else if (num1 < 13)
    {
        console.log(name + " trinkt Saft.");
    }

    else if(num1 <18)
    {
    console.log(name + " trinkt Cola.");
    }
        
    else if(num1 > 17)
    {
        console.log(name + " trinkt Wein.");
    }

    else
    {
        console.log("Sie haben keine Zahl als Alter eingegeben!")
    }
}