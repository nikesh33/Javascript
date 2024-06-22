// array part 2

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); //isme array ke last me pura array chala jayega dc_heros ka marvel_heros k array me which will be consider  a array a single element
console.log(marvel_heros);
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);

//2 another method we could use which is concat
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// ******************************** spread operator (...) ************************** //

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// 
console.log(Array.isArray("Nikesh"));
console.log(Array.from("Nikesh"));
console.log(Array.from({name:"Nikesh"})); //interesting


// convert array

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
