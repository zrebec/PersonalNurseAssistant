const breakpointTablet = 768;
const breakpointDesktop = 1376;
const items = document.getElementById('navigation').querySelectorAll("li");

var isMenuHidden = true;

function checkMenu() {
    if (window.innerWidth > breakpointTablet && isMenuHidden === false) {
        items.forEach((item, index) => {
            if (index === 0) { item.style.display = 'none'; return}
            item.style.display = 'block';
        });
    } else if (window.innerWidth <= breakpointTablet && isMenuHidden === false) {
        items.forEach((item, index) => {
            if (index === 0) {item.style.display = 'block'; return}
            item.style.display = 'none';
        });
    }
}

function showMenu() {
    if (isMenuHidden) {
        isMenuHidden = false;
        items.forEach((item, index) => { item.style.display = 'block'; });
    } else {
        items.forEach((item, index) => {
            if (index === 0) return;
            item.style.display = 'none';
        });
        isMenuHidden = true;
    }
}