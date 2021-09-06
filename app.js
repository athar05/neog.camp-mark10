const checkButton = document.getElementById("check-button");
const message = document.getElementById("error-message");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];

function checkBillAndCashGivenAmount() {
  const billAmount = document.getElementById("bill-amount");
  const cashGiven = document.getElementById("cash-given");

  if (billAmount.value > 0) {
    console.log("cash: " + cashGiven.value);
    console.log("bill: " + billAmount.value);
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Cash Given Should Be Greater Than Bill Amount");
    }
  } else {
    showMessage("Please Enter A Valid Input");
  }
}

checkButton.addEventListener("click", checkBillAndCashGivenAmount);

function calculateChange() {
  /*
    calculate balance - loop over currency/denomination array
    get the modulo and display value on element
    update the balance variable
  */

  const billAmount = document.getElementById("bill-amount");
  const cashGiven = document.getElementById("cash-given");

  let balanceAmount = cashGiven.value - billAmount.value;

  availableNotes.forEach((note) => {
    const count = Math.trunc(balanceAmount / note);
    const elementID = "currency-value-" + note;
    const element = document.getElementById(elementID);

    if (count > 0) element.innerText = count;
    else element.innerText = "-";

    balanceAmount = balanceAmount - count * note;
  });
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}
