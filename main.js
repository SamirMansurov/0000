import { Header } from "./components/Header";
import { reload } from "./lib/utils";
import { Transaction } from "./components/Tranjaction";
import { Card } from "./components/Card";
import { ApiCall } from "./lib/http.request";


const ref = JSON.parse(localStorage.getItem('user'))
const call = new ApiCall("http://localhost:8080")

const wallet = await call.getData('/wallets?userId=' + ref.id)
const transaction = await call.getData('/transactions?userId=' + ref.id)

const local = JSON.parse(localStorage.getItem('user'))
const name = document.querySelector('#user_name')
const email = document.querySelector('#user_email')
const body = document.body

const tbody = document.querySelector('.place')
const cards = document.querySelector('.wallets')

email.innerHTML = local.email
name.innerHTML = local["last-name"] + ' ' + local["first-name"]


reload([{}],body, Header)
reload(transaction,tbody, Transaction)
reload(wallet,cards, Card)