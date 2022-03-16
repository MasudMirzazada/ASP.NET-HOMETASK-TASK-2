function GetUser(){
    fetch("https://randomuser.me/api/?results=100")
    .then(response=>response.json())
    .then(data=> {
        var x = "";
       
        data.results.forEach(user=>{
            x+=`
            <div class=col-lg-3
             text-center>
            <img src="${user.picture.large}" alt="">
            <p>${user.phone}</p>
            <p>${user.name.first} ${user.name.last} </p>
            </div>
            `
        })
        document.getElementById("users").innerHTML=x
    })
    .catch(error=>console.log(error))
    }
