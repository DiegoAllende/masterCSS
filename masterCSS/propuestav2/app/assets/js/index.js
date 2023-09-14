console.log("INIT")

let allMenu = document.querySelectorAll('.header-menu__link');
allMenu.forEach((item) => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.active-menu').forEach(i => i.classList.remove('active-menu'));
        item.classList.add('active-menu')
    });
});

document.getElementById('btn-bp-1').onclick = function () {
    document.getElementById('resp-bp-1').focus();
};

document.getElementById('btn-bp-2').onclick = function () {
    document.getElementById('resp-bp-2').focus();
};

document.getElementById('btn-bp-3').onclick = function () {
    document.getElementById('resp-bp-3').focus();
};

document.getElementById('btn-bp-4').onclick = function () {
    document.getElementById('resp-bp-4').focus();
};

document.getElementById('btn-bp-4-1').onclick = function () {
    document.getElementById('resp-bp-4-1').focus();
};
document.getElementById('btn-bp-4-2').onclick = function () {
    document.getElementById('resp-bp-4-2').focus();
};
document.getElementById('btn-bp-4-3').onclick = function () {
    document.getElementById('resp-bp-4-3').focus();
};

document.addEventListener('scroll', function fnScroll(a) {
    console.log(document.scrollingElement.scrollTop);
    // document.scrollingElement.scrollTop = 0;
});

