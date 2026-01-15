
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
test()

// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Simonas!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
//ausgabeNamen();

// Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS
    let firstname = "claudia";
    console.log("Hallo, " + firstname + "!");
}

//console.log(firstname); //Fehler: Scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2();
ausgabeNamen2("Daiden");

function ausgabeNamen2(firstName) {
    console.log("Hallo, " + firstName + "!");
}
