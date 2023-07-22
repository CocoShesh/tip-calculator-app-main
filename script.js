function calculateAndDisplayTip(tipPercentage) {
  let billAmount = parseFloat(document.getElementById("input-bill").value);
  let numberOfPeople = parseFloat(
    document.getElementById("Number-of-people").value
  );

  if (isNaN(billAmount) || isNaN(numberOfPeople)) {
    return;
  }

  let tipAmount = (tipPercentage * billAmount) / 100;
  let totalAmount = billAmount + tipAmount;
  let tipPerPerson = tipAmount / numberOfPeople;
  let totalPerPerson = totalAmount / numberOfPeople;

  document.getElementById("value").textContent = tipPerPerson.toFixed(2);
  document.getElementById("total").textContent = totalPerPerson.toFixed(2);
}

function handleTip1() {
  calculateAndDisplayTip(5);
}

function handleTip2() {
  calculateAndDisplayTip(10);
}

function handleTip3() {
  calculateAndDisplayTip(15);
}

function handleTip4() {
  calculateAndDisplayTip(25);
}

function handleTip5() {
  calculateAndDisplayTip(50);
}

function handleReset() {
  document.getElementById("input-bill").value = "";
  document.getElementById("Number-of-people").value = "";
  document.getElementById("value").textContent = "0.00";
  document.getElementById("total").textContent = "0.00";
  document.getElementById("custom").value = "";
}

function handleCustom() {
  let customTipPercentage = parseFloat(document.getElementById("custom").value);
  if (isNaN(customTipPercentage)) {
    return;
  }
  calculateAndDisplayTip(customTipPercentage);
}
