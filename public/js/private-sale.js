// Get the ETH amount input element
const ethAmountInput = document.querySelector('#eth-amount');

// Get the XINK equivalent input element
const xinkEquivalentInput = document.querySelector('#xink-equivalent');

// Calculate the XINK equivalent and update the input element as the user enters the ETH amount
ethAmountInput.addEventListener('input', (event) => {
  const ethAmount = parseFloat(event.target.value);
  const xinkEquivalent = ethAmount * 576000;
  xinkEquivalentInput.value = xinkEquivalent.toFixed(2);
});
