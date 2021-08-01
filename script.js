
const currency_1 = document.getElementById('currency-one');
const amount_1 = document.getElementById('amount-one');
const currency_2 = document.getElementById('currency-two');
const amount_2 = document.getElementById('amount-two');

const ratel = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetching conversion rate and updating DOM
function caclulate() {
  const currency_one = currency_1.value;
  const currency_two = currency_2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];

      ratel.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amount_2.value = (amount_1.value * rate).toFixed(2);
    });
}


// Events
currency_1.addEventListener('change', caclulate);
amount_1.addEventListener('input', caclulate);
currency_2.addEventListener('change', caclulate);
amount_2.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
  const temp = currency_1.value;
  currency_1.value = currency_2.value;
  currency_2.value = temp;
  caclulate();
});

caclulate();
