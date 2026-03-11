const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
let top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
});

gsap.from(".hero-title",{duration:1.5,y:100,opacity:0});