"use strict";
//DAY FIVE !!!!
/*Quesition 13:your own array:think of your favourite mode of transportation, sucha as motorcylce or a car,
and make list that stores several examples. use your list to print a series of statements about these items,
such as "i would like to own a honda motorcycle".*/
let transport = ["Audi A5", "Toyota Land Cruiser"];
transport.forEach(transport => {
    console.log(`i would like to own ${transport}`);
});
/*Question 14:Guest list: if you cloud invite anyone,living or deceased, to dinner, who would you invite?
 make a list that includes at least 3 people would you like to invite to dinner.
 then use your list to print a message to each person, inviting them to dinner */
let guests = ["faiza", "maha", "humera"];
guests.forEach(guests => {
    console.log(`${guests} would you like to have dinner with me?`);
});
/*Question 15:Changing guests list: one of your guest cant make it to dinner, so you need to send out new set
of invitations with a replacement guest*/
//unale to attend guest
let unableTOattend = "humera";
console.log(`${unableTOattend} cant make it to dinner`);
//replace guest
let newGuest = "momal";
guests[guests.indexOf(unableTOattend)] = newGuest;
//new invitation
guests.forEach(guests => {
    console.log(`${guests} would you like to join us to dinner?`);
});
