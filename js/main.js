var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $('#s1').mouseenter(function(){
    // alert('sdads')
    $('.c2').hide()
    $('.c3').hide()
    $('.c4').hide()

  })

  $('#s1').mouseleave(function(){
    // alert('sdads')
    $('.c2').show()
    $('.c3').show()
    $('.c4').show()

  })


  $('#s2').mouseenter(function(){
    // alert('sdads')
    $('.c1').hide()
    $('.c3').hide()
    $('.c4').hide()

  })

  $('#s2').mouseleave(function(){
    // alert('sdads')
    $('.c1').show()
    $('.c3').show()
    $('.c4').show()

  })


  
  $('#s3').mouseenter(function(){
    // alert('sdads')
    $('.c1').hide()
    $('.c2').hide()
    $('.c4').hide()

  })

  $('#s3').mouseleave(function(){
    // alert('sdads')
    $('.c1').show()
    $('.c2').show()
    $('.c4').show()

  })

  $('#s4').mouseenter(function(){
    // alert('sdads')
    $('.c1').hide()
    $('.c2').hide()
    $('.c3').hide()

  })

  $('#s4').mouseleave(function(){
    // alert('sdads')
    $('.c1').show()
    $('.c2').show()
    $('.c3').show()

  })
  // $("#p1").mouseenter(function(){
  //   alert("You entered p1!");
  // });


  