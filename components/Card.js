export function Card(item) {
    const cardElement = document.createElement('div');
    const cardName = document.createElement('p');
    const totalBalance = document.createElement('p');
    const currentCurrency = document.createElement('p');

    cardElement.classList.add('card');
    cardName.classList.add('name_card');
    currentCurrency.classList.add('currently');
    totalBalance.classList.add('currently');

    cardName.innerHTML = item["wallet-name"];
    currentCurrency.innerHTML = item.currency;
    totalBalance.innerHTML = item["wallet-balance"] + ' | ' + item.currency;

    cardElement.append(cardName, totalBalance, currentCurrency);


    return cardElement
}