const name = "Nikesh";
const repoCount = 50;

// concatinate ==>  joining character strings end-to-end
console.log(name + " " + repoCount + " Value");

// backtick `` make it easy to concatinate strings and inject variables
// backticks (`) are used to create template literals
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nikesh')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());