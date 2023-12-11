const $ = (selector) => document.querySelector(selector);

// function to process the input
function processEntry() {
  const amountEntered = parseInt($("#cents").value);

  !isNaN(amountEntered) && amountEntered >= 0 && amountEntered <= 99
    ? makeChange(amountEntered)
    : alert("Please enter a valid number between 0 and 99.");
}

// function to caluculate the coin changes
function makeChange(amount) {
  const coins = [25, 10, 5, 1];
  const change = {};

  coins.forEach((coin) => {
    change[coin] = Math.floor(amount / coin);
    amount %= coin;
  });

  $("#quarters").value = change[25] || 0;
  $("#dimes").value = change[10] || 0;
  $("#nickels").value = change[5] || 0;
  $("#pennies").value = change[1] || 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = $("#calculateBtn");
  calculateBtn.addEventListener("click", processEntry);
});
