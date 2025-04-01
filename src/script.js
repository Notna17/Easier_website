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