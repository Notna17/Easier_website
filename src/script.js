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