import moment from 'moment'
export function Wallet(item) {
    const wallet = document.createElement('div')
    const img_card = document.createElement('img')
    const span = document.createElement('span')
    const opened = document.createElement('p')

    wallet.classList.add('wallet')
    wallet.id = item.id
    span.classList.add('span')
    opened.classList.add('opened')
    img_card.classList.add('img')

    img_card.src = '/card.svg'
    span.innerHTML = item["wallet-name"]
    opened.innerHTML = `created: ${moment(item.createdAt).fromNow()}`
    wallet.append(img_card, span, opened)

    wallet.onclick = () => {
        location.assign('/pages/wallet_info/?id=' + item.id)
    }

    return wallet
}
