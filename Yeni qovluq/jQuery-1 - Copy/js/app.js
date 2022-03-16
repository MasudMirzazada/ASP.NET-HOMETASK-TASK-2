// var btn = document.getElementById('btn')
// var btn = document.querySelectorAll('.box')

// document.getElementById('btn').onclick = function(){
//     document.getElementById('first').style.display = 'none'
// }

// $('#btn').click(function(){
//     $('#first').hide();
// })

// $(document).ready(function(){
//     $('#first').mouseenter(function(){
//         $("#first").css('background-color','black');
//     }) 

//     $('#first').mouseleave(function(){
//         $("#first").css('background-color','red');
//     }) 
// })


// $('#inp').focus(()=>{
//     $('#inp').addClass('active')
    
// })

// $('#btn').click(function(){
//     $('#inp').hide()
// })

// $('#inp').blur(()=>{
//     $('#inp').removeClass('active')
// })


// $('#btn').click(function(){
//     $('#text').hide();
//     alert("Text is hidden!")
// })

// $('#btn').click(function(){
//     $('#first').animate({
//         right: Math.floor(Math.random() * 100) + "px",
//         bottom: Math.floor(Math.random() * 100) + "px",
//     })
// })


// scroll
// scrollTop()

// $(window).scroll(function(){
//     if($(window).scrollTop() > 150) { 
//         $('header').css('background-color','#2c2929')
//         $('header').css('padding','20px 0')
//         $('#scroll').css('opacity','1')
//     }
//     else{
//         $('header').css('background-color','#c9c7c7')
//         $('header').css('padding','30px 0');
//         $('#scroll').css('opacity','0')
//     }
// })

// $('#scroll').click(function(){
//     $('html,body').animate({
//         scrollTop: 0
//     },3000)
// })


// $('button').click(function(){

//     $('input').attr('type','number')

//     console.log($('h1').text())
//     console.log($('h1').html())
// })

// var X = $.noConflict();
// X('button').click(function(){
//     X('h1').toggleClass('color')
// })

// function Hello() {
//     // var value = document.getElementById('inp').value;
//     // var url = `http://api.qrserver.com/v1/create-qr-code/?data=${value}&size=100x100`
//     // var image = document.getElementById('qr');
//     // image.src = url
    
//     var value = "Salam"
//     const Speech = new SpeechSynthesisUtterance(value);
//     Speech.volume = 3;
//     Speech.rate = 0.5;
//     Speech.pitch = 0.5
//     window.speechSynthesis.speak(Speech);

// }

// Hello();