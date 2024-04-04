"use strict";
//DAY ONE
//Quesitin 1
//installl node.js, Typescript and VS code on your computer/laptop.
//Quesition 2
//Personal Message: store a person's name in a varible and print a message to them, like "hello Asharib,
//would you like to learn some Typescript today?"
let Name = "tabsheera";
console.log(`"hello ${Name}, would you like to learn some typescript today?"`);
//Quesition 3
//stripping name: store a person's name,and include some whitespace characters at the beginning and end 
//of the name. Use"\t"(tab) and "\n"(new line) at least once.print the name once, so the whitespace around the
//name is displayed. then print the name after srtippping the white spaces.
let personName = "tabsheera";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() +
    Name.slice(1).toLowerCase());
