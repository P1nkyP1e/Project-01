
//   carousel   //

 
$(".main-carousel").flickity({
  draggable: true,
  freeScroll: true,
  prevNextButtons: false,
  cellAlign: "left",
  contain: true,
  autoPlay: true
});


// form-button  //



$("form").on("click", "button", function(event) {
  event.preventDefault();

  alert("Thanks for subscribing!");
});

//  smooth scrolling source @ https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
