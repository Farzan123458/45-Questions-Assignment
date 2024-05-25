// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let Numbers = [1,2,3,4,5,6,7,8,9];
// • Loop through the array.
for (let i = 0; i<Numbers.length;i++){
    if (Numbers[i]== 1){
        console.log(`${Numbers[i]}st`)
    }
    else if (Numbers[i]== 2){
        console.log(`${Numbers[i]}nd`)
    }
    else if (Numbers[i]== 3){
        console.log(`${Numbers[i]}rd`)
    }
    else if (Numbers[i] >=4 && Numbers[i] <=9){
        console.log(`${Numbers[i]}th`)
    }
}
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
// Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
