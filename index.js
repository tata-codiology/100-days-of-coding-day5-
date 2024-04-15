"use strict";
//DAY FOUR !!!!
//Quesition 10
//adding comments:choose two of the program you've written,and add at least add one comment to each.if the 
//program are straightforward at this point,just add your name and the current date at the top.write one sentence
//discribing what each program does.
//tabsheera 15/4/24
//this code prints personal message
let Name = "tabsheera";
console.log(`hello, ${Name} would you like to learn some typescript today?`);
//QUESITION 11
//names:store the names of a few of your friends in an array called names. print each person's name by 
//accessing each element in the list, one at a time
let Names1 = ["faiza", "irma", "maha"];
for (let i = 0; i < Names1.length; i++) {
    console.log(Names1[i]);
}
;
//QUESITION 12
//greeting:use the array from ex:11. instead of just printing each person's name,print a message to them.
//the message should be the same for eaxh person,nut personalized with their names
let Names = ["faiza", "irma", "maha"];
for (let name of Names) {
    console.log(`hello ${Names},would you guys like to learn some typescript today?`);
}
;
