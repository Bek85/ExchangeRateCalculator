const currencyElement_one = document.getElementById('currency-one');
const currencyElement_two = document.getElementById('currency-two');
const currencyAmount_one = document.getElementById('amount-one');
const currencyAmount_two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

const exchangeUrl =
  'https://v6.exchangerate-api.com/v6/674d7953c4e89688defbc059/latest/';

// Fetch exchange rates and update the DOM
async function calculate() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;

  try {
    const response = await fetch(`${exchangeUrl}${currency_one}`).then((res) =>
      res.json()
    );
    console.log(response);
    const rate = response.conversion_rates[currency_two];
    rateElement.textContent = `1 ${currency_one} = ${rate} ${currency_two}`;
    currencyAmount_two.value = (currencyAmount_one.value * rate).toFixed(2);
    console.log(rate);
  } catch (e) {
    console.log(e);
  }
}

currencyElement_one.addEventListener('change', calculate);
currencyAmount_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
currencyAmount_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyElement_one.value;
  currencyElement_one.value = currencyElement_two.value;
  currencyElement_two.value = temp;
  calculate();
});

calculate();
