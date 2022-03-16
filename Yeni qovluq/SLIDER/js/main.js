let right = document.querySelector(".right");
let left = document.querySelector(".left");
let images = document.querySelector(".images");

right.onclick = function () {
  let active = document.querySelector(".active");
  active.classList.remove("active"); 
  if ( active.nextElementSibling!=null) {
    active.nextElementSibling.classList.add("active");  
  }
  else{
    images.firstElementChild.classList.add("active")
  }
};

left.onclick = function () {
    let active = document.querySelector(".active");
    active.classList.remove("active"); 
    if ( active.previousElementSibling!=null) {
      active.previousElementSibling.classList.add("active");  
    }
    else{
      images.lastElementChild.classList.add("active")
    }
  };