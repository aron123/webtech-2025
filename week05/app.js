// konzol
console.log('Hello World');

// változók
let variable = 15;
variable = 'str';
variable = false;

const constant = 17;

const randomNum = Math.random();

// elágazások
const name = '';

// truthy: nem üres string, != 0, true, tömb, objektum
// falsy: '', 0, false, null, undefined

if (name) {
    console.log('Felhasználónév:', name);
} else {
    console.log('Nincs felhasználónév.');
}

// tömbök
const values = [ 'red', 'blue', 0, true, null, [] ];

for (let i; i < values.length; i++) {
    console.log(values[i]);
}

// for-in ciklus
// minden 2. elem kiíratása
for (const index in values) {
    if (index % 2 == 1) {
        console.log(values[index]);
    }
}

// for-of
for (const value of values) {
    console.log(value);
}

// transzformációs metódusok: map, filter
const exchangeRates = [ 397, 405, 415, 444, 398, 410, 415 ];

// egyes hónapokban 1500 Ft hány eurót ért?
const euros = exchangeRates.map((rate) => 1500 / rate);
console.log(euros);

// milyen 400 Ft alatti árfolyamok voltak?
const below400 = exchangeRates.filter((rate) => rate < 400);
console.log(below400);

// függvények
function greet(name) {
    console.log('Hello', name);
}

greet('Béla');

function square(num) {
    return num * num;
}

console.log(square(2));

// objektumok
const person = {
    name: 'John',
    age: 15,
    active: true,
    dogs: [ 'Morzsi', 'Feri' ],
    greet: function () {
        console.log('Hello', this.name);
    }
};

person.greet();