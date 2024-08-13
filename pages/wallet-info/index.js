import { reload } from "../../lib/utils";
import { ApiCall } from "../../lib/http.request";
import { Wallet } from "../../components/Info_card";
const apicall = new ApiCall('http://localhost:8080');

(async function() {
    const h1 = document.querySelector('.user_card');
    const close = document.querySelector('.close_info');
    const name_card = document.querySelector('.name_card');
    const total = document.querySelector('.total');
    const currently = document.querySelector('.currently');
    const wallets_place = document.querySelector('.wallets_place');
    const conv_in = document.querySelector('#conv_in');
    const conv_to = document.querySelector('#conv_to');
    const much = document.querySelector('#much');
    const convert = document.querySelector('.convert');
    const total_conv = document.querySelector('#total');
    const history_currency = document.querySelector('.history_currency');
    const id = new URLSearchParams(window.location.search).get('id');
    const refId = JSON.parse(localStorage.getItem('user'));

    try {
        const wallet = await apicall.getData('/wallets?userId=' + refId.id);
        const res = await apicall.getData('/wallets/' + id);

        convert.addEventListener('click', async () => {
            const params = {
                from: conv_in.value,
                to: conv_to.value,
                amount: much.value
            };
            try {
                const convertation = await apicall.getData('/convert', params);
                total_conv.innerHTML = `TOTAL: ${convertation.result} ${conv_to.value}`;
            } catch (error) {
                console.error('Error during conversion:', error);
            }
        });

        reload(wallet, wallets_place, Wallet);

        function Select_Currency(item) {
            return new Option(item.currency, item.id);
        }
        reload(wallet, history_currency, Select_Currency);

        name_card.innerHTML = res["wallet-name"];
        currently.innerHTML = res.currency;
        total.innerHTML = Number(res.balance).toLocaleString('us') + ' | ' + res.currency;
        h1.innerHTML = `Dashboard: ${res["wallet-name"]}`;
        close.addEventListener('click', () => {
            location.assign('/');
        });

        const elems = document.querySelectorAll('.wallet');
        elems.forEach(item => {
            if (item.id === id) {
                item.classList.add('active');
            }
        });

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error loading data:', error);
    }
})();
