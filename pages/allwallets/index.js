import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";

const user = JSON.parse(localStorage.getItem('user'));
const api = new ApiCall("http://localhost:8080");
const wallets = await api.getData('/wallets?userId=' + user.id);
const addWalletButton = document.querySelector('#add_wallet');
const bodyElement = document.body;
const walletsContainer = document.querySelector('.wallets_all');

reload([{}], bodyElement, Header);
reload(wallets, walletsContainer, Card);

addWalletButton.onclick = () => {
    location.assign('/pages/wallet/');
};
