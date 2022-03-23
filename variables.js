// declaring variable from document

var btn = document.querySelector(".btn");

// input fields
var num = document.getElementById("num");
var select =document.getElementById("select");

//output area to display outputs
var output = document.getElementById("output");


// to help  methods.js
var chars = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

var smallChars = ['a','b','c','d','e','f','h','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
var capitalChars = smallChars.map(char => char.toUpperCase());
var syms = [0,1,2,3,4,5,6,7,8,9,...smallChars,...capitalChars,'@','!','#','$','%','^','*','&','~','+','-',"/","`",".","<",">"];//for pw only

var places = ["Thailand","South-Korea","USA","UK","Myanmar","Japan","France","Canada","Russia","UAE"];//for places
var names = ["Johnson","Charles","Jimmy","Cathy","Cherr","Nicole","Lionel","Mike","Mojam","Bee","Sweettie","Micheal","Justin","Dustin"];

