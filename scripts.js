const currencyElement_one = document.getElementById('currency-one');
const currencyElement_two = document.getElementById('currency-two');
const currencyAmount_one = document.getElementById('amount-one');
const currencyAmount_two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  console.log('RAN');
  // try {
  //   const response = await fetch(
  //     'https://open.exchangerate-api.com/v6/lates'
  //   ).then((res) => console.log(res));
  //   console.log(response);
  // } catch (e) {
  //   console.log(e);
  // }
}

currencyElement_one.addEventListener('change', calculate);
currencyAmount_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
currencyAmount_two.addEventListener('input', calculate);

calculate();
