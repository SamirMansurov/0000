export function Transaction(item , array){
    const tr_body = document.createElement('tr')
    const id = document.createElement('td')
    const which_card = document.createElement('td')
    const cat = document.createElement('td')
    const total = document.createElement('td')
    const when = document.createElement('td')

    id.classList.add('td')
    which_card.classList.add('td')
    cat.classList.add('td')
    total.classList.add('td')
    when.classList.add('td')

    id.innerHTML = item.id
    which_card.innerHTML = item.wallet
    cat.innerHTML = item.cat
    total.innerHTML = item.total
    when.innerHTML = item.createdAt

    tr_body.append(id,which_card,cat,total,when)

    return tr_body
}