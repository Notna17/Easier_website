$(function(){$(".slider").slick({centerMode:!0,infinite:!0,speed:500,fade:!0,autoplay:!0,autoplaySpeed:4e3})});let downloads=0,showSublists=(document.getElementById("download_way1").addEventListener("click",()=>{downloads+=1}),document.getElementById("download_way2").addEventListener("click",()=>{downloads+=1}),document.getElementById("download_way3").addEventListener("click",()=>{downloads+=1}),e=>{var t=document.getElementById("leftlistitem"+e.toString());let o=document.getElementById("sublist"+e.toString()),l=!0;t.addEventListener("mouseenter",()=>{l?o.style.display="block":o.style.display="none",l=!l})});for(let e=1;e<=6;e++)showSublists(e);let form=document.getElementById("form"),feedbackStart=document.getElementById("feedbackStart"),overlay=document.getElementById("overlay"),cross=document.querySelector(".close"),openForm=()=>{form.style.zIndex="2000",overlay.style.zIndex="1999",form.style.visibility="visible",overlay.style.visibility="visible",form.classList.toggle("on"),overlay.classList.toggle("on")},closeForm=()=>{form.classList.toggle("on"),overlay.classList.toggle("on"),form.style.zIndex="-2000",overlay.style.zIndex="-2001",form.style.visibility="hidden",overlay.style.visibility="hidden"},errorMaker=(feedbackStart.addEventListener("click",openForm),cross.addEventListener("click",closeForm),overlay.addEventListener("click",closeForm),(e,t)=>{let o=document.getElementById(e);o.setCustomValidity(t),o.addEventListener("invalid",()=>{o.classList.add("error"),o.reportValidity()}),o.addEventListener("input",()=>{o.classList.remove("error")})});errorMaker("name","Будь ласка, введіть ваше ім'я"),errorMaker("email","Будь ласка, введіть дійсну електронну адресу"),errorMaker("phone","Будь ласка, введіть дійсний номер телефону");