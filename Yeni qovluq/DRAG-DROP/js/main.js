// let dragitem=document.getElementById('dragitem'); 
// let dropitem =document.getElementById('dropitem');
 
// // drag olunan elementelere tetbiq olunanlar
// let Id;
// dragitem.ondragstart=function(ev){
//  ev.dataTransfer.setData("id",this.id);
// }

// dragitem.ondragend=function(){
//     console.log("Drag bitdi")
// }

// dragitem.ondrag=function(){
//     console.log("Drag davam edir");
// }

// drop olunan elemenlete verilir asaqidakilar

// dropitem.ondragenter=function(){
//   console.log("Drop olundu");
// }

// dropitem.ondragleave=function(){
//     console.log("drag leave");
// }

// dropitem.ondragover=function(e){
//    e.preventDefault();
// }

//  dropitem.ondrop=function(){
//      let item =document.getElementById(Id);
//      this.append(item); 
//  }

// task 1

let dragItems=document.querySelectorAll(".test");
let dropitem =document.getElementById('dropitem');
for(let item of dragItems){
    item.ondragstart=function(ev){
       ev.dataTransfer.setData("id",this.id);
    }
}

dropitem.ondragover=function(e){
   e.preventDefault();
}

dropitem.ondrop=function(ev){
    console.log(ev)
   let id =ev.dataTransfer.getData("id",this.id);
   this.append(document.getElementById(id));
}