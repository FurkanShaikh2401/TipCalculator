/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const perPersonTotalText = document.getElementById('perPersonTotal');
const numberOfPeopleText = document.getElementById('numberOfPeople');

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleText.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {

    // get billAmount from user input & convert it into a number
    let billAmount = Number(billTotalInput.value);

    // get the totalAmount by adding billAmount and calculating the tipAmount using billAmount
    let totalAmount = billAmount + ( ( billAmount * Number(tipInput.value)) / 100 );

    // calculate the per person total (total divided by number of people)
    let perPersonTotal = totalAmount / numberOfPeople;

    // update the perPersonTotal on DOM & show it to user
    perPersonTotalText.innerText = `$${perPersonTotal.toFixed(2)}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {

    // increment the amount
    numberOfPeople += 1;

    // update the DOM with the new number of people
    numberOfPeopleText.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
}


const decreasePeople = () => {

    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if( numberOfPeople <= 1){
        alert("Number of People should be greater than or equal to 1");
        return;
    }

    // decrement the amount
    numberOfPeople -= 1;

     // update the DOM with the new number of people
    numberOfPeopleText.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
}