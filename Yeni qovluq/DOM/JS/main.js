//  let text=document.getElementById('text').innerText="<b>Code Academy</b>";
//  console.log(text)

// let html=document.getElementById('text').innerHTML="Code Academy";
//  console.log(html);

// let val = document.querySelector('#Number').value;
// document.querySelector('#Number').value="Mesud"
// console.log(val)

let number = document.getElementById("Number");
let parentLi = document.getElementById("parentli");
let add = document.getElementById("Add");
let Remove = document.getElementById("Remove");

add.addEventListener("click", function () {
  console.log(this.style.color);
  parentLi.innerHTML = "";
  // parentLi.remove;
  // console.log( parentLi.children.length)
  // for (const removeli of parentLi.children) {
  //  removeli.remove();
  // }
  //  console.log(document.querySelector(".test").classList.toggle("item"))
  let liCount = number.value;
  for (let i = 1; i <= liCount; i++) {
    //  let li = document.createElement("li");
    //  li.className = "list-group-item";
    //  li.innerText = i;
    //  console.log(li);
    //  parentLi.append(li);
    parentLi.innerHTML += "<li class='list-group-item'>" + i + "</li>";
  }
  number.value = "";
});
Remove.onclick = function(){
   let selectedLi=document.getElementsByClassName("color");
   for (let li of selectedLi) {
      li.remove();
   }
}