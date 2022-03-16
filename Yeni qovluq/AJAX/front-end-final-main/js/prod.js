$('.big-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small-image-slider'
  });
  $('.small-image-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.big-image-slider',
    centerPadding: '0px'
  });
  $(".slick-next").html(`<i class="fa-solid fa-arrow-right"></i>`)
  $(".slick-prev").html(`<i class="fa-solid fa-arrow-left"></i>`)
  

  var myTopBtns = document.querySelectorAll(".description-list li a");
  var myTexts = document.querySelectorAll(".description-texts li");
  for(let li of myTopBtns){
    li.addEventListener("click",function(e){
      e.preventDefault();
      var active = document.querySelector(".active-des");
      active.classList.remove("active-des")
      this.classList.add("active-des")

      var index = this.getAttribute("data-text");
      for(let text of myTexts){
        if(text.getAttribute("data-text") == index){
          text.classList.add("activet")
        }
        else{
          text.classList.remove("activet")
        }
      }
    })
  }