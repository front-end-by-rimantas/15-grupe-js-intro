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

function skaitmenuKiekisSkaiciuje( number ){
    // validavimas
    if ( typeof(number) !== 'number' ||
         isFinite(number) === false ) {
        return console.error('ERROR: reikalingas tikras skaicius');
    }

    // logika
    const skaiciusTekstu = ''+number;
    let count = skaiciusTekstu.length;

    // jei tekstineje skaiciaus reprezentacijoje yra kablelis, tai count--
    // pavyzdys, kaip ieskoti su ciklu (siam scenarijuje neverta naudoti)
    // for ( let i=0; i<skaiciusTekstu.length; i++ ) {
    //     if ( skaiciusTekstu[i] === '.' ) {
    //         count--;
    //         break;
    //     }
    // }
    if ( number % 1 !== 0 ) {
        count--;
    }

    // jei neigiamas skaicius, tai count--
    if ( number < 0 ) {
        count--;
    }

    // rezultato grazinimas
    return count;
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -12345 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ), '->', 5 );


console.log('kas negerai su tokiu skaiciume??? 🤔🤔');
console.log( skaitmenuKiekisSkaiciuje( 10000000000000000000000000000000000000000 ), '->', 31 );


console.log('----------------------');
console.log('DIDZIAUSIAS SKAICIUS SARASE');
console.log('----------------------');

function didziausiasSkaiciusSarase( list ) {
    if ( Array.isArray(list) === false ) {
        return console.error('ERROR: turi buti array tipo');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: array negali buti tuscias');
    }

    // "biggest" = maziausias, bet ne normalus skaicius
    // einame per skaiciu sarasa
        // tikriname ar einamasis skaicius yra tikras skaicius
            // jei ne:
                // einam prie sekancio saraso nario
        // tikriname ar einamasis skaicius didesnis uz "biggest"
            // jei taip:
                // "biggest" = einamasis skaicius
    // po visko patikriname ar tai normalus skaicius

    let biggest = -Infinity;
    for ( let i=0; i<list.length; i++ ) {
        const einamasisSkaicius = list[i];
        if ( isFinite(einamasisSkaicius) === false ) {
            continue;
        }
        if ( einamasisSkaicius > biggest ) {
            biggest = einamasisSkaicius;
        }
    }

    if ( biggest === -Infinity ) {
        return console.error('ERROR: sarase turi buti bent vienas normalus skaicius');
    }

    return biggest;
}

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( 1 ) );
console.log( didziausiasSkaiciusSarase( true ) );
console.log( didziausiasSkaiciusSarase( false ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, Infinity ] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ 1, 3, Infinity ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, Infinity ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, Infinity ] ), '->', 1 );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, 1 ] ), '->', 1 );

console.log('----------------------');
console.log('ISRENKAME RAIDES');
console.log('----------------------');

function isrinktiRaides( text, step ) {
    // validacija
    if ( typeof(text) !== 'string' ) {
        return console.error('ERROR: pirmas reiksme turi buti teksto tipo');
    }
    // if ( text.length === 0 ) {
    if ( text === '' ) {
        return console.error('ERROR: tekstas negali buti tuscias');
    }

    if ( isFinite(step) === false ) {
        return console.error('ERROR: antra reiksme turi buti normalus skaicius');
    }
    if ( step === 0 ) {
        return console.error('ERROR: zingsnis negali buti nulinis');
    }
    if ( step > text.length ) {
        return console.error('ERROR: zingsnis negali buti didesnis uz turimo teksto ilgi');
    }
    if ( step % 1 !== 0 ) {
        return console.error('ERROR: zingsnis turi buti sveikasis skaicius');
    }

    // logika
    let newWord = '';

    if ( step > 0 ) {
        for ( let i=step-1; i<text.length; i=i+step ) {
            newWord = newWord + text[i];
        }
    } else {
        for ( let i=text.length+step; i>=0; i=i+step ) {
            newWord = newWord + text[i];
        }
    }

    return newWord;
}

console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( '', 0 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 1.5 ) );
console.log( isrinktiRaides( 'abcdefghijkl', Infinity ) );
console.log( isrinktiRaides( 'abcdefghijkl', NaN ) );

console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( 'abcdefghijkl', 1 ), '->', 'abcdefghijkl' );
console.log( isrinktiRaides( 'abcdefg', -2 ), '->', 'fdb' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ), '->', 'jgda' );
console.log( isrinktiRaides( 'asdfghjkl', -1 ), '->', 'lkjhgfdsa' );

console.log('----------------------');
console.log('DALYBA');
console.log('----------------------');

function dalyba( a, b ) {
    if ( !isFinite(a) ||
         !isFinite(b) ) {
        return console.error('ERROR: duok normalius skaicius');
    }
    if ( b === 0 ) {
        return console.error('ERROR: dalyba is nulio nepageidautina');
    }
    return a / b;
}

console.log( dalyba(Infinity, 4) );
console.log( dalyba(8, Infinity) );
console.log( dalyba(8, 0) );

console.log( dalyba(8, 4) );
console.log( dalyba(0, 4) );


// a = Infinity

// isFinite(a) === false
// false === false
// true


// !isFinite(a)
// !false
// true