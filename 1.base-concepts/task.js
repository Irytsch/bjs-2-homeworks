"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1, x2);
    console.log(arr);
    return arr;
  } 
  if (d === 0) {
    let x = -b/(2*a);
    arr.push(x);
    console.log(arr);
    return arr;
  }
  else {
    console.log(arr);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = percent / 12 / 100;
  let n = countMonths;
  let s = amount - contribution;
  let monthlyPayment = s*(per+(per/(((1+per)**n)-1)));
  let totalAmount = parseFloat((monthlyPayment * n).toFixed(2));
  return totalAmount;
}