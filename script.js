// Write several custom functions that take in parameters and return useful values

function getLocation(country, city) {
    console.log(country, city);
}
getLocation("Gabon", "Libreville");

//  ------------------------------------------------------- //


// Demonstrate understanding of local vs global scope

//  Global variable demo
const salary = 6000;
let bonusPercentage = 0.2;

function employeeBonus() {
    bonus = salary * bonusPercentage;
    console.log(`USD ${bonus}`);
}
employeeBonus(); // output: USD 1200

// Trying to access the global valiable
console.log(salary); // output: 6000


// Local variable demo
function employeeTax() {
    const revenue = 100000;
    let taxPercentage = .13;    
    finalTax = revenue * taxPercentage;
    console.log(`USD ${finalTax}`);
}
employeeTax(); // output: USD 13000

// Trying to access the function's local valiable
console.log(taxPercentage); // output: taxPercentage is not defined


// Show how functions can be reused to control animation, trigger DOM changes, or calculate values


// Combining Js & CSS3

// Toggling a CSS Class
function toggleAnimation() {
    const box = document.getElementById('myBox');
    box.classList.toggle('animate-move');
}