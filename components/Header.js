export function Header(item) {
    const user = JSON.parse(localStorage.getItem('user'));
    const headerElement = document.createElement('header');
    const headerBox = document.createElement('div');
    const navLeft = document.createElement('nav');
    const navRight = document.createElement('nav');
    const linkHome = document.createElement('a');
    const linkWallets = document.createElement('a');
    const linkTransactions = document.createElement('a');
    const linkEmail = document.createElement('a');
    const profileImageLink = document.createElement('a');
    const logoutImage = document.createElement('img');
    
    headerElement.classList.add('header');
    headerBox.classList.add('header_box');
    navLeft.classList.add('left');
    navRight.classList.add('right');
    linkHome.classList.add('header_text');
    linkWallets.classList.add('header_text');
    linkTransactions.classList.add('header_text');
    linkEmail.classList.add('header_text');
    profileImageLink.classList.add('header_img');
    logoutImage.src = '/exit.svg';
    
    linkHome.innerHTML = 'Главная';
    linkWallets.innerHTML = 'Мои кошельки';
    linkTransactions.innerHTML = 'Мои транзакции';
    linkEmail.innerHTML = user.email;
    
    headerElement.append(headerBox);
    headerBox.append(navLeft, navRight);
    navLeft.append(linkHome, linkWallets, linkTransactions);
    navRight.append(linkEmail, profileImageLink);
    profileImageLink.append(logoutImage);
    
    profileImageLink.onclick = () => {
        localStorage.clear();
        location.assign('/pages/signin/');
    };
    linkHome.onclick = () => {
        location.assign('/');
    };
    linkWallets.onclick = () => {
        location.assign('/pages/allwallets/');
    };
    linkTransactions.onclick = () => {
        location.assign('/pages/alltransactions/');
    };
    
    return headerElement;
    
}



