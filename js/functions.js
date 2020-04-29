"use strict";

function tusciaFunkcija(){
    return false;
}

console.log( tusciaFunkcija() );

function daugyba( pirmas, antras ){
    // validuojame ieinancius duomenis
    if ( typeof(pirmas) !== 'number' ) {
        return console.error('ERROR: pirma reiksme turi buti skaicius');
    }
    if ( typeof antras !== 'number' ) {
        return console.error('ERROR: antra reiksme turi buti skaicius');
    }

    if ( isNaN(pirmas) === true ) {
        return console.error('ERROR: pirma reiksme turi buti tikras skaicius');
    }
    if ( ''+antras === 'NaN' ) {
        return console.error('ERROR: antra reiksme turi buti tikras skaicius');
    }
    
    if ( isFinite(pirmas) === false ) {
        return console.error('ERROR: pirma reiksme turi buti ne begalybe');
    }
    if ( ''+antras === 'Infinity' ) {
        return console.error('ERROR: antra reiksme turi buti ne begalybe');
    }

    // realizuojame funkcijos logika
    const result = pirmas * antras;

    // graziname rezultata
    return result;
}

console.log( daugyba('Laba', 'diena') );            // NaN - Not a Number
console.log( daugyba(3.6, 'asfd') );
console.log( daugyba('asfd', 5115) );
console.log( daugyba(true, 5115) );
console.log( daugyba(false, 5115) );
console.log( daugyba([], 5115) );
console.log( daugyba([1], 5115) );
console.log( daugyba([1, 2], 5115) );
console.log( daugyba(['a'], 5115) );
console.log( daugyba(['a', 'b'], 5115) );
console.log( daugyba(['1'], 5115) );
console.log( daugyba(['1', '2'], 5115) );
console.log( daugyba() );
console.log( daugyba(3.6, NaN) );
console.log( daugyba(Infinity, -1.5) );
console.log( daugyba(48, Infinity) );
console.log( daugyba(Infinity, Infinity) );

console.log( daugyba(2, 2, 1154, 1156, 26, 0) );
console.log( daugyba(3, 5) );
console.log( daugyba(-3, 5) );
console.log( daugyba(3, -5) );
console.log( daugyba(-3, -5) );
console.log( daugyba(-3, 0) );
console.log( daugyba(0, 515515) );
console.log( daugyba(0, 0) );
console.log( daugyba(4, 2.5) );
console.log( daugyba(3.6, -1.5) );


console.log('----------------------');
console.log('SKAITMENU KIEKIS SKAICIUJE');
console.log('----------------------');
