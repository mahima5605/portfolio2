const sections=document.querySelectorAll("section, div[id]");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let current = "";
  sections.forEach(section =>{
    const sectionTop= section.offsetTop - 120;
    if(pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if(link.getAttribute("href")===`#${current}`){
      link.classList.add("active-link");
    }
  });
});

const scrollBtn = document.querySelector(".scroll-top");
window.addEventListener("scroll",() =>{
  if (window.scrollY> 300) {
    scrollBtn.style.opacity="1";
    scrollBtn.style.pointerEvents = "auto";
  }else {
    scrollBtn.style.opacity="0";
    scrollBtn.style.pointerEvents="none";
  }
});

// Typing Effect
const text = ["Aspiring Web Developer","Frontend Developer","UI Enthusiast","Problem Solver"];
let count=0;
let index=0;
let currentText="";
let letter="";
(function type() {  //self run(auto. start)
  if(count=== text.length) {
    count=0;
  }
  currentText=text[count];
  letter=currentText.slice(0,++index);
  document.querySelector(".typing").textContent=letter;
  if(letter.length===currentText.length){
    count++;
    index=0;
    setTimeout(type,1200);
  }else{
    setTimeout(type,100);
  }
})();

const navItems = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });

    bsCollapse.hide();
  });
});
