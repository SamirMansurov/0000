import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";

const transactionForm = document.forms.namedItem('transaction-form');
const amountInput = document.querySelector('#total');
const walletSelect = document.querySelector('#wallet');
const apiService = new ApiCall("http://localhost:8080");

const userInfo = JSON.parse(localStorage.getItem('user'));
const userWallets = await apiService.getData('/wallets?userId=' + userInfo.id);

function createWalletOption(wallet) {
    const option = document.createElement('option');
    option.textContent = wallet["wallet-name"];
    return option;
}

reload(userWallets, walletSelect, createWalletOption);
transactionForm.onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const transactionDetails = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userInfo.id,
    };

    formData.forEach((value, key) => transactionDetails[key] = value);
    const walletInfo = await apiService.getData('/wallets?wallet-name=' + transactionDetails.wallet);
    if (walletInfo.length <= 0) {
        alert('Wallet not found!');
        return;
    }

    const [walletFromDB] = walletInfo;
    if (walletFromDB.total < amountInput.value) {
        alert('Insufficient funds!');
        return;
    }
    await apiService.postData('/transactions', transactionDetails);
    transactionForm.reset();
    window.location.href = '/';
};
