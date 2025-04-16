window.onload = () => {
    const billInput = document.getElementById('billTotal');
    const billWithTax = document.getElementById('billWithTax');
    const tipSlider = document.getElementById('tipSlider');
    const tipDisplay = document.getElementById('tipValue');
    const tipAmount = document.getElementById('tipAmount');
    const totalWithTipTax = document.getElementById('totalWithBillTipTax');
    const currencySelect = document.getElementById('selectCurrenty');

    const exchangeRates = {
        usd: 1,
        euro: 0.95,
        rupee: 85
    };

    const currencySymbols = {
        usd: '$',
        euro: '€',
        rupee: '₹'
    };

    function calculate() {
        const billValue = parseFloat(billInput.value.trim());
        if (isNaN(billValue) || billValue <= 0) {
            billWithTax.value = '';
            tipAmount.value = '';
            totalWithTipTax.value = '';
            return;
        }

        const tax = billValue * 0.11;
        const totalWithTaxUSD = billValue + tax;

        billWithTax.value = "$" + totalWithTaxUSD.toFixed(2);

        const selectedCurrency = currencySelect.value;
        const rate = exchangeRates[selectedCurrency];
        const symbol = currencySymbols[selectedCurrency];
        const tipPercent = parseInt(tipSlider.value);
        const tip = totalWithTaxUSD * (tipPercent / 100);
        const total = totalWithTaxUSD + tip;

        tipAmount.value = symbol + (tip * rate).toFixed(2);
        totalWithTipTax.value = symbol + (total * rate).toFixed(2);
    }

    billInput.addEventListener('input', () => {
        billInput.value = billInput.value.replace(/[^0-9.]/g, '');
        calculate();
    });

    tipSlider.addEventListener('input', () => {
        tipDisplay.textContent = tipSlider.value;
        calculate();
    });

    currencySelect.addEventListener('change', () => {
        calculate();
    });
};
