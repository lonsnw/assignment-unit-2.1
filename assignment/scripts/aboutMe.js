// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'lons';

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'nadziejka waller';

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
//     Console log the value of `fullName`
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
//     Console log the value of `luckyNumber`
let luckyNumber = 3;
console.log(luckyNumber);

// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
let introduction = 'My name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!';
console.log(introduction);

// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
//     Console log the value of `adventurous`
let adventurous = true;
console.log(adventurous);

// 7 - Create a variable named `food`, and set its value to a string of your favorite food
//     Console log the value of `food`
let food = 'bagels';
console.log(food);

// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
//     Console log the value of `pets`
let pets = 1;
console.log(pets);

// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 7;
console.log(friendsPets);

// 10 - Add two pets to your `pets` variable
pets+=2;
console.log(pets);

// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets=43;
console.log(allowedPets);

// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`
let result;
if(adventurous){
  result = 'Adventures are great!'
} //end adventurous is true
else{
  result = 'How about we stay home?'
} //end adventurous is false
console.log(result);

// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional: 
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"
//      Console log the value of `diceRoll`
let diceRoll = 'Try again later.';
if(luckyNumber==2 && adventurous){
  diceRoll = 'Roll the dice!'
}//end diceRoll definition
console.log(diceRoll);

// 14 - Create a variable called `petStatus`. 
//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets" 
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets" 
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"
let petStatus;
if(pets<allowedPets){
  petStatus = 'I can have more pets'
}
else if(pets==allowedPets){
  petStatus = 'I have enough pets'
}
else if(pets>allowedPets){
  petStatus = 'Oh no, I have too many pets!'
}
console.log(petStatus);

// STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios. 
//      console.log `mostPets` after the conditional has run.
let mostPets;
if(pets>friendsPets){
  mostPets=pets
}//end i have more pets
else{
  mostPets=friendsPets
}//end they have more pets
console.log(mostPets);

// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.

//used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch AND https://www.w3schools.com/js/js_switch.asp AND https://www.programiz.com/javascript/switch-statement for this

// let luckyResult=1;
// switch (luckyResult){
//   case luckyResult=1:
//     console.log('First is the worst');
//     break;
//   case luckyResult=2:
//     console.log('Second is the best');
//     break;
//   case luckyResult=3:
//     console.log('Third is the one with the polka dot dress');
//     break;
//   default:
//     console.log('Luck is what happens when preparation meets opportunity')
// }

// luckyResult = 5;
// switch (luckyResult){
//   case luckyResult=1:
//     console.log('First is the worst');
//     break;
//   case luckyResult=2:
//     console.log('Second is the best');
//     break;
//   case luckyResult=3:
//     console.log('Third is the one with the polka dot dress');
//     break;
//   default:
//     console.log('Luck is what happens when preparation meets opportunity')
// }
// console.log(luckyResult);

//trying again based on feedback from ally:

let luckyResult=``;
switch (luckyNumber){
  case 1:
    luckyResult = 'First is the worst';
    break;
  case 2:
    luckyResult = 'Second is the best';
    break;
  case 3:
    luckyResult = 'Third is the one with the polka dot dress';
    break;
  default:
    luckyResult = 'Luck is what happens when preparation meets opportunity'
}
console.log(luckyResult);


// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!
// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`

//used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator for this one

function ternaryResult(adventurous){
  return adventurous ? 'Adventures are great!': 'How about we stay home?';
}
console.log(ternaryResult(true));
//expect Adventures are great
console.log(ternaryResult(false));
//expect to stay home




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== 'undefined' ? firstName : undefined,
    lastName: typeof lastName !== 'undefined' ? lastName : undefined,
    fullName: typeof fullName !== 'undefined' ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== 'undefined' ? luckyNumber : undefined,
    introduction: typeof introduction !== 'undefined' ? introduction : undefined,
    adventurous: typeof adventurous !== 'undefined' ? adventurous : undefined,
    food: typeof food !== 'undefined' ? food : undefined,
    pets: typeof pets !== 'undefined' ? pets : undefined,
    friendsPets: typeof friendsPets !== 'undefined' ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== 'undefined' ? allowedPets : undefined,
    result: typeof result !== 'undefined' ? result : undefined,
    diceRoll: typeof diceRoll !== 'undefined' ? diceRoll : undefined,
    petStatus: typeof petStatus !== 'undefined' ? petStatus : undefined,
    mostPets: typeof mostPets !== 'undefined' ? mostPets : undefined,
    luckyResult: typeof luckyResult !== 'undefined' ? luckyResult : undefined,
  };
} catch (e) {
  // Do nothing
}