window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {
    var windowheihgt = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheihgt - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');

    }

  }

}






var nature1 = document.getElementById("nature1");
var nature2 = document.getElementById("nature2");
var nature3 = document.getElementById("nature3");

var animal1 = document.getElementById("animal1");
var animal2 = document.getElementById("animal2");
var animal3 = document.getElementById("animal3");

var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");




function NatureShow() {
  animal1.style.display = "none";
  animal2.style.display = "none";
  animal3.style.display = "none";

  car1.style.display = "none";
  car2.style.display = "none";
  car3.style.display = "none";

  nature1.style.display = "block";
  nature2.style.display = "block";
  nature3.style.display = "block";

}

function AnimalShow() {

  car1.style.display = "none";
  car2.style.display = "none";
  car3.style.display = "none";

  nature1.style.display = "none";
  nature2.style.display = "none";
  nature3.style.display = "none";

  animal1.style.display = "block";
  animal2.style.display = "block";
  animal3.style.display = "block";


}

function CarShow() {

  nature1.style.display = "none";
  nature2.style.display = "none";
  nature3.style.display = "none";

  animal1.style.display = "none";
  animal2.style.display = "none";
  animal3.style.display = "none";

  car1.style.display = "block";
  car2.style.display = "block";
  car3.style.display = "block";

}
function AllShow() {

  nature1.style.display = "block";
  nature2.style.display = "block";
  nature3.style.display = "block";
  
  animal1.style.display = "block";
  animal2.style.display = "block";
  animal3.style.display = "block";
  
  car1.style.display = "block";
  car2.style.display = "block";
  car3.style.display = "block";
  
}

function SearchImage(){

  let search=document.getElementById("search").value;

  if(search=="car"){
    CarShow();
  }
  else if(search=="nature"){
    NatureShow() ;
  }
  else if(search=="animal"){
    AnimalShow();
  }
  else{
    AllShow();
  }

}

let ham = document.getElementById("ham");
let show = document.getElementById("show");
let cancel = document.getElementById("cancel");
cancel.style.display = "none";

function menushow() {

  show.style.display = "block";
  ham.style.display = "none";
  cancel.style.display = "block";
}

function menuhide() {
  show.style.display = "none";
  ham.style.display = "block";
  cancel.style.display = "none";

}

const ActiveMenu= document.querySelectorAll(".menu ul li a");
ActiveMenu.forEach((ActiveM)=>{
  ActiveM.addEventListener("click",() => {
    document.querySelector("li a.Active-menu").classList.remove("Active-menu");
    ActiveM.classList.add("Active-menu");
  });
  });

const ActiveFilter= document.querySelectorAll(".filter-menu ul li");
ActiveFilter.forEach((ActiveF)=>{
  ActiveF.addEventListener("click",() => {
    document.querySelector("li.Active-Filter").classList.remove("Active-Filter");
    ActiveF.classList.add("Active-Filter");
  });
  });

const resactive= document.querySelectorAll(".menu ul li a");
resactive.forEach((ActiveF)=>{
  ActiveF.addEventListener("click",() => {
    document.querySelector("li a.res-active").classList.remove("res-active");
    ActiveF.classList.add("res-active");
     if(cancel.style.display=="block" ){
      
      menuhide();
    }
  });
  });
