import { ApiCall } from "../../lib/http.request";

const walletForm = document.forms.namedItem('wallet-form');
const currencySelector = document.querySelector('#currency');
const user = JSON.parse(localStorage.getItem('user'));
const apiService = new ApiCall("http://localhost:8080");

const fetchSymbols = async () => {
    const response = await fetch('https://api.apilayer.com/fixer/symbols', {
        method: "GET",
        headers: {
            apikey: "TGCgzIx4lrYPFz1bvQS4bX3QiLBodyDo"
        }
    });
    return response.json();
};

const updateCurrencyOptions = async () => {
    const data = await fetchSymbols();
    currencySelector.innerHTML = "";

    for (const [symbol, name] of Object.entries(data.symbols)) {
        currencySelector.innerHTML += `
            <option value="${symbol}">${symbol} : ${name}</option>
        `;
    }
};

updateCurrencyOptions();

walletForm.onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const walletDetails = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.id,
    };

    formData.forEach((value, key) => walletDetails[key] = value);

    await apiService.postData('/wallets', walletDetails);

    walletForm.reset();
    window.location.href = '/';
};
