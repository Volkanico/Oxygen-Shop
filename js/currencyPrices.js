const currencySymbols = {
    'usd': '$',
    'eur': '€',
    'gbp': '£'
};
let initialPriceInEuros;

export async function currencies() {
    const selectedCurrency = document.querySelector(".pricings__selection__select").value;

    try {
        const basicPriceElement = document.querySelector(".pricings__plans__plan-basic__price__price");
        const professionalPriceElement = document.querySelector(".pricings__plans__plan-professional__price__price");
        const premiumPriceElement = document.querySelector(".pricings__plans__plan-premium__price__price");

        if (!initialPriceInEuros) {
            initialPriceInEuros = {
                basic: parseFloat(basicPriceElement.textContent.replace(/[^\d.-]/g, '')),
                professional: parseFloat(professionalPriceElement.textContent.replace(/[^\d.-]/g, '')),
                premium: parseFloat(premiumPriceElement.textContent.replace(/[^\d.-]/g, ''))
            };
        }

        const exchangeRate = await getExchangeRate(selectedCurrency);
        const convertedPrices = {
            basic: initialPriceInEuros.basic * exchangeRate,
            professional: initialPriceInEuros.professional * exchangeRate,
            premium: initialPriceInEuros.premium * exchangeRate
        };

        const currencySymbol = currencySymbols[selectedCurrency];

        basicPriceElement.textContent = `${currencySymbol} ${convertedPrices.basic.toFixed(2)}`;
        professionalPriceElement.textContent = `${currencySymbol} ${convertedPrices.professional.toFixed(2)}`;
        premiumPriceElement.textContent = `${currencySymbol} ${convertedPrices.premium.toFixed(2)}`;
    } catch (error) {
        console.error('Error al obtener el tipo de cambio:', error);
    }
}

async function getExchangeRate(currency) {
    try {
        const currenciesFetch = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/eur.json`);
        const currenciesData = await currenciesFetch.json();
        const lowercaseCurrency = currency.toLowerCase();

        const eurData = currenciesData.eur;
        const gbpValue = eurData['gbp'];
        const usdValue = eurData['usd'];

        if (lowercaseCurrency === 'eur') {
            return 1;
        }
        if (lowercaseCurrency === 'usd') {
            return 1 * usdValue;
        }
        if (lowercaseCurrency === 'gbp') {
            return 1 * gbpValue;
        }
        return 1;
    } catch (error) {
        console.error('Error al obtener el tipo de cambio:', error);
    }
}
