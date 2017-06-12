$(document).ready(function () {
  var trigger = $('.hamburger'),
      trigger2 = $('.side')
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    trigger2.click(function () {
      side_cross();
    });

    function hamburger_cross() {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    function side_cross() {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
    }
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});

// Trigger Ask A Question
$(document).ready(function(){
  var trigger = $('.modal'),
    isClosed = false;

    trigger.click(function () {
      ask();
    });

    function ask() {
      trigger.addClass('in');
      isClosed = false;
    }
    if (isClosed==false) {
      $("#myModal").modal('show');
    }
});
