(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel({
        autoplay: true
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        duration: 200,
        autoplay: true
    });
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        // alert("Ready");
        // console.log(modal, trigger);
      },
      complete: function() {
        // alert('Closed');
      } // Callback for Modal close
    }
  );

    setInterval(function() {
    $('.carousel').carousel('next');
    }, 4000);

  }); // end of document ready
})(jQuery); // end of jQuery name space