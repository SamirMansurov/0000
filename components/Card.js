export function Card(item) {
    const card = document.createElement('div')
    const name_card = document.createElement('p')
    const total = document.createElement('p')
    const currently = document.createElement('p')

    card.classList.add('card')
    name_card.classList.add('name_card')
    currently.classList.add('currently')
    total.classList.add('currently')

    card.style.background = `linear-gradient(84.37deg, ${getRGB()} 2.27%, ${getRGB()} 92.26%)`

    name_card.innerHTML = item["wallet-name"]
    currently.innerHTML = item.currency
    total.innerHTML = Number(item.balance).toLocaleString('us') + ' | ' + item.currency
    card.append(name_card, total, currently)

    card.onclick = () => {
        location.assign('/pages/wallet_info/?id=' + item.id)
    }

    return card
}


function getRGB() {
    function randomize() {
        return Math.floor(Math.random() * 255)
    }

    let r = randomize(),
        g = randomize(),
        b = randomize();

    return `rgb(${r},${g},${b})`
}