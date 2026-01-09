document.getElementById("year").textContent = new Date().getFullYear();

let hamBtn = document.getElementById("ham-btn");
let mobileNavbar = document.getElementsByClassName("mobile-menu")[0];
let hamIcon = document.getElementsByClassName("fa-solid")[0];


let homeBtn = document.querySelector(".mobile-menu");      //any of ul btn 

hamBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("active");


   if(hamIcon.classList.contains("fa-bars")){
    
        hamIcon.classList.remove("fa-bars");
        hamIcon.classList.add("fa-xmark");
   }else{
        hamIcon.classList.remove("fa-xmark");
        hamIcon.classList.add("fa-bars");
   }


   
});

homeBtn.addEventListener("click", () => {
     console.log("hello");
     mobileNavbar.classList.remove("active");
     hamIcon.classList.remove("fa-xmark");
     hamIcon.classList.add("fa-bars");
    
  
});



//Resume Download confirm 

// function confirmDownload(){
//      return confirm("Do you want to download my resume?");
// }