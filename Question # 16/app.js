var Guest = ["Sayyaf", "Talha", "Khuzaimah"];
console.log("Mr ".concat(Guest[0], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[1], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[2], ", You Are Invited For A Dinner!!"));
console.log("Unfortunately ".concat(Guest[1], " Is Not Coming Due To Some Reason!"));
Guest[1] = "Furqan";
console.log("Mr ".concat(Guest[1], ", You Are Invited For A Dinner!!"));
console.log("Hy guys, I Found a bigger dinner table!!");
Guest.unshift("Maqsood");
console.log(Guest);
Guest.splice(2, 0, "Salman");
console.log(Guest);
Guest.push("Anus");
console.log(Guest);
console.log("Mr ".concat(Guest[0], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[2], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[1], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[4], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[3], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[5], ", You Are Invited For A Dinner!!"));
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
//  program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
