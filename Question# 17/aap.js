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
console.log("I can invite only two people for dinner");
console.log("Sorry Mr ".concat(Guest[5], ", you are not invited for dinner"));
Guest.pop();
console.log(Guest);
console.log("Sorry Mr ".concat(Guest[4], ", you are not invited for dinner"));
Guest.pop();
console.log(Guest);
console.log("Sorry Mr ".concat(Guest[3], ", you are not invited for dinner"));
Guest.pop();
console.log(Guest);
console.log("Sorry Mr ".concat(Guest[2], ", you are not invited for dinner"));
Guest.pop();
console.log(Guest);
console.log("".concat(Guest[1], " and ").concat(Guest[0], " You both are still invited"));
Guest.pop();
console.log(Guest);
Guest.pop();
console.log(Guest);
console.log("I Actually Have An Empty List");
