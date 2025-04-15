window.onload = () => {
    const billInput = document.getElementById('billTotal');
    const billWithTax = document.getElementById('billWithTax');
    const tipSlider = document.getElementById('tipSlider');
    const tipDisplay = document.getElementById('tipValue');
    const tipAmount = document.getElementById('tipAmount');
    const totalWithTipTax = document.getElementById('totalWithBillTipTax');
    const currencySelect = document.getElementById('selectCurrenty');
    const errorMsg = document.getElementById('billError');
    const currencySymbolSpan = document.getElementById('currencySymbol');

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
        const billValue = billInput.value.trim();
        let bill = parseFloat(billValue);
        const selectedCurrency = currencySelect.value;
        const rate = exchangeRates[selectedCurrency];
        const symbol = currencySymbols[selectedCurrency];

        if (isNaN(bill) || bill <= 0) {
            billWithTax.value = symbol + '0.00';
            tipAmount.value = symbol + '0.00';
            totalWithTipTax.value = symbol + '0.00';
            if (errorMsg) errorMsg.style.display = 'block';
            return;
        }

        if (errorMsg) errorMsg.style.display = 'none';

        const tax = bill * 0.11;
        const totalWithTax = bill + tax;
        const tipPercent = parseInt(tipSlider.value);
        const tip = totalWithTax * (tipPercent / 100);
        const total = totalWithTax + tip;

        billWithTax.value = symbol + totalWithTax.toFixed(2);
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
        const selectedCurrency = currencySelect.value;
        currencySymbolSpan.textContent = currencySymbols[selectedCurrency];
        calculate();
    });
};
