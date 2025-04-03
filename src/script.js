$(function() {
    $('.slider').slick({
        centerMode: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});
let downloads = 0
document.getElementById("download_way1").addEventListener("click", () => {
    downloads += 1;
});
document.getElementById("download_way2").addEventListener("click", () => {
    downloads += 1;
});
document.getElementById("download_way3").addEventListener("click", () => {
    downloads += 1;
});
let showSublists = (x) => {
    let listItem = document.getElementById("leftlistitem" + x.toString());
    let sublist = document.getElementById("sublist" + x.toString());
    let hidden = true;
    listItem.addEventListener("mouseenter", () => {
        if (hidden) {sublist.style.display = "block";}
        else {sublist.style.display = "none";}
        hidden = !hidden;
    });
}
for (let i = 1; i <= 6; i++) {showSublists(i)}

//форма
const form = document.getElementById('form');
const feedbackStart = document.getElementById('feedbackStart');
const overlay = document.getElementById('overlay');
const cross = document.querySelector('.close');
const openForm = () => {
    form.style.zIndex = "2000";
    overlay.style.zIndex = "1999";
    form.style.visibility = "visible";
    overlay.style.visibility = "visible";
    form.classList.toggle("on");
    overlay.classList.toggle("on");
}
const closeForm = () => {
    form.classList.toggle("on");
    overlay.classList.toggle("on");
    form.style.zIndex = "-2000";
    overlay.style.zIndex = "-2001";
    form.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
}
feedbackStart.addEventListener('click', openForm);
cross.addEventListener('click', closeForm); 
overlay.addEventListener('click', closeForm);

//помилки
const errorMaker = (id, customMessage) => {
    let input = document.getElementById(id);
    input.setCustomValidity(customMessage); 
    input.addEventListener('invalid', () => {
        input.classList.add('error');
        input.reportValidity();
    });
    input.addEventListener('input', () => {
        input.classList.remove('error');
    });
}
errorMaker('name', 'Будь ласка, введіть ваше ім\'я');
errorMaker('email', 'Будь ласка, введіть дійсну електронну адресу');
errorMaker('phone', 'Будь ласка, введіть дійсний номер телефону');