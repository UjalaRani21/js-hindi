const name = "ujala"
const repoCount = 10

console.log(name + repoCount + " Value");
// Output: ujala10 Value
//But this is a old fashioned way

console.log('Hello my name is ${name} and my repo count is ${repocount}');
// Output: Hello my name is ujala and my repo count is 10
// this is a new way to write/add things, this is called repo-interpolation

// ++++++ Accessing Keys(Value pairs) ++++++

const gameName = new String('ujala-dot-com')
//console.log(gameName[0]);
// output: h

// Accessing Prototype 
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,3)
console.log(anotherString);

const newStringOne = "   ujala   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://ujala.com/ujala%20rani"
console.log(url.replace('%20','-'));

console.log(url.includes('ujala')); // output: true
console.log(url.includes('jatin')); // output: false

console.log(gameName.split('-'))
// output: [ 'ujala', 'dot', 'com' ]
