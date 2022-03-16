let menus = document.querySelectorAll(".menu div");
let contents=document.querySelectorAll(".content div");
for (let menu of menus) {
    menu.onclick = function () {
    document.querySelector(".selected").classList.remove("selected");
    this.classList.add("selected");
 let data_id=this.getAttribute("data-id");
 
console.log("menunn datasi:" +data_id);
for (const content of contents) {
    if (data_id==content.getAttribute("data-id")) {
        content.className=""
     }
     else{
        content.className="d-none"   
     }
    console.log(content.getAttribute("data-id"))
}
}
}
