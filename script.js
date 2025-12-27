// ================== Typing Effect ==================
const vText = ["Data Analyst","Data Science","Machine Learning"];
let i=0, j=0;

function vType(){
 if(j < vText[i].length){
  document.getElementById("v-type").innerHTML += vText[i].charAt(j);
  j++;
  setTimeout(vType,90);
 } else setTimeout(vErase,900);
}

function vErase(){
 if(j>0){
  document.getElementById("v-type").innerHTML = vText[i].substr(0,j-1);
  j--;
  setTimeout(vErase,40);
 } else{
  i=(i+1)%vText.length;
  setTimeout(vType,200);
 }
}
vType();

const vText = ["Data Analyst","Data Scientist","Machine Learning Enthusiast"];
let i = 0, j = 0;
let typing = true;
const vSpan = document.getElementById("v-type");

function typeEffect(){
  if(!vSpan) return;

  if(typing){
    if(j < vText[i].length){
      vSpan.textContent += vText[i].charAt(j);
      j++;
      setTimeout(typeEffect, 80);
    } else{
      typing = false;
      setTimeout(typeEffect, 700);
    }
  } 
  else{
    if(j > 0){
      vSpan.textContent = vText[i].substring(0, j-1);
      j--;
      setTimeout(typeEffect, 50);
    } else{
      typing = true;
      i = (i+1) % vText.length;
      setTimeout(typeEffect, 200);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// NAV BAR //
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const options = {
  threshold: 0.6
};

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href").replace("#","") === entry.target.id){
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach(section=>{
  observer.observe(section);
});


// ================== Certification Popup ==================
const popup = document.getElementById("certPopup");
const popupImg = document.getElementById("popupImage");
const closeBtn = document.querySelector(".cert-close");

document.querySelectorAll(".open-cert").forEach(btn=>{
 btn.addEventListener("click",(e)=>{
   const img = e.target.closest(".flip-inner")
                .querySelector(".flip-front img");
   popup.style.display="flex";
   popupImg.src = img.src;
 });
});

closeBtn.addEventListener("click",()=> popup.style.display="none");

popup.addEventListener("click",e=>{
 if(e.target===popup) popup.style.display="none";
});


// ================== Scroll Active Navbar ==================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});



function openInternCert(){
  const popup = document.getElementById("internCertPopup");
  popup.style.display = "flex";
}

function closeInternCert(){
  const popup = document.getElementById("internCertPopup");
  popup.style.display = "none";
}

// close when clicking outside image
document.getElementById("internCertPopup").addEventListener("click",(e)=>{
  if(e.target.id === "internCertPopup"){
    closeInternCert();
  }
});

// close on ESC key
document.addEventListener("keydown", e=>{
  if(e.key === "Escape"){
    closeInternCert();
  }
});

function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el=>{
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let elementVisible = 120;

    if(elementTop < windowHeight - elementVisible){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});




