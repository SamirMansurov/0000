import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";

const form = document.forms.namedItem('transaction-form')
const total_inp = document.querySelector('#total')
const select_wallet = document.querySelector('#wallet')
const apiCall = new ApiCall("http://localhost:8080")
const refId = JSON.parse(localStorage.getItem('user'))
const res = await apiCall.getData('/wallets?userId=' + refId.id)

function SelectWallet(item){
    const option = new Option(item['wallet-name'], item.id)

    return option
}
reload(res,select_wallet,SelectWallet)

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const transaction = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: refId.id,
    }

    fm.forEach((val, key) => transaction[key] = val)
    
    const data = await apiCall.getData('/wallets/' + transaction.walletId)

    delete data.id 

    transaction.wallet = data

    if(transaction.total > +data.balance || transaction.total < 0) {
        total_inp.style.border = '2px solid red'
        Toastify({
            text: 'Insufficient funds!',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #ff0000, #ff3333)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return
    }
    const total = data.balance - transaction.total

    await apiCall.patchData('/wallets/' + transaction.walletId, {balance: total})
    await apiCall.postData('/transactions', transaction)

    form.reset()
    location.assign('/')
}