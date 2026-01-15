
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
ausgabeNamen();

// Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS
    let firstname = "claudia";
    console.log("Hallo, " + firstname + "!");
}

//console.log(firstname); //Fehler: Scope