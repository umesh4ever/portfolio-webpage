document.getElementById("year").textContent = new Date().getFullYear();

let hamBtn = document.getElementById("ham-btn");
let mobileNavbar = document.getElementsByClassName("mobile-menu")[0];

hamBtn.addEventListener("click", () => {

   if(mobileNavbar.style.display === "none"){
        mobileNavbar.style.display === "block"
   }else{
    mobileNavbar.style.display === "none"
   }
});

hamBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("active");
});
