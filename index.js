//Question 1
let a = "Extravaganza";
console.log(a[8], a[9], a[10], a[11]);

//Question 2
const food = "The quick fox jumped over the lazy dog";
let b = "eat";

const c = `The ${b} quick fox jumped over the lazy dog`;
console.log({c});

//Question 3
const story= "The quick brown fox jumps over the lazy dog";
let d = "The quick brown fox jumps over the lazy dog";
console.log((d.match(/the/g)).length)
console.log((d.match(/brown/g)).length);

//Question 4
const string1 = "The pupils are reading in the library";
let x = string1.indexOf('are');
console.log({x});

const string2 = "The child was sitting on the table before it fell";
let y = string2.indexOf('sitting');
console.log({y});

//Question 5
let e = "wonderful";
let f = e.toUpperCase();
console.log({f});

let g = "amazing";
let h = g.toLowerCase();
console.log({h});

let i = "UndERneath";
let j = i.toLowerCase();
console.log({j});

let k = "A wonderful world";
let titleCase= "";
k.split(" ").forEach(word =>{
const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
titleCase += capitalizeWord + " ";})
console.log(titleCase);


