import { ApiCall } from "../../lib/http.request";

const form = document.forms.namedItem('wallet-form')
const refId = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall("http://localhost:8080")
const bank_apiCall = new ApiCall("https://api.apilayer.com/fixer", "j2pLT7yrORYlBVoSvkYpj4dXnY4GaQJj")

const select = document.querySelector('select')
const res = await bank_apiCall.getData('/symbols')

select.innerHTML = ""
for(let key in res.symbols) {

    select.innerHTML += `
        <option value="${key}"  >${key}: ${res.symbols[key]}</option>
    `
}

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const wallet = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: refId.id,
    }

    fm.forEach((val, key) => wallet[key] = val)

    await apiCall.postData('/wallets', wallet)

    form.reset()
    location.assign('/')   
}