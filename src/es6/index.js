// como se hacía anteriormente
function newFunction(name, age, country){
    var name = name || 'Ángel';
    var age  = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name='Angel', age='23', country='MX'){
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');


// Template literals

let hello = "Hello";
let world = "World";

let phrase = hello + ' ' + world;
console.log(phrase);

let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

let lorem = "Excepteur ut elit quis sint incididunt est consequat ea irure ea enim eiusmod labore. \n"+
"salto de linea";

//es6
let lorem2 = `otra frace epica
otra linea
`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name' : 'Ángel',
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

// operador de propagación