import { Header } from "../../components/Header";
import { reload } from "../../lib/utils";
import { ApiCall } from "../../lib/http.request";
import {Transaction} from "../../components/Tranjaction"
const user = JSON.parse(localStorage.getItem('user'));
const api = new ApiCall("http://localhost:8080");
const addTransactionButton = document.querySelector('#add_transaction');
const transactions = await api.getData('/transactions?userId=' + user.id);
const bodyElement = document.body;
const transactionTableBody = document.querySelector('.place');

reload([{}], bodyElement, Header);
reload(transactions, transactionTableBody, Transaction);

addTransactionButton.onclick = () => {
    location.assign('/pages/transaction/');
};
