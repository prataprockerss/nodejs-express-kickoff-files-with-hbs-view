$(window).on('load',function () {
  // hide loader on page load
  hidePageLoader();

  if ($('.copy-btn').length) {
    new Clipboard('.copy-btn', {
      target: function (trigger) {
        return trigger.parentNode.parentNode.nextElementSibling
      }
    });
  }
  $('.message .btn.close').on('click', function () {
    closeMessage($(this).parents('.message'))
  })
  $('.toggle-btn').click(function () {
    var target = $('.wrapper')
    if (target.hasClass('nav-opened')) {
      target.removeClass('nav-opened');
    }
    else {
      target.addClass('nav-opened');
    }
  })
  checkElement($('.timepicker'), function(){
    $('.timepicker').each(function(){
      var trigger = $(this).next('.timepicker-trigger')
      $(this).timepicker();
      var _this = $(this)
      trigger.on('click',function(){
        _this.timepicker('setTime', new Date());
      });
    })
  });
  $('.toast-message-select').on('change', function () {
    showPopMessage($(this).val())
  })
  $('.pop-message-select').on('change', function () {
    var value = $(this).val();
    $('.pop-messages').removeClass('show')
    $('.' + value).addClass('show')
    setTimeout(function () {
      showToastMessage($('.' + value))
    }, 500)
  })
  $('.accordion-title').on('click', function () {
    if ($(this).next('.accordion-content').css('display') == 'none') {
      $('.accordion-content').slideUp().parents('.accordion').removeClass('active');
      $(this).parents('.accordion').addClass('active');
      $(this).next('.accordion-content').slideDown(function () {
        var pos = $(this).parents('.accordion').offset().top - $('.header').outerHeight()
        $('.content-area .main-cnt').animate({ scrollTop: pos })
      });
    } else {
      $('.accordion-content').slideUp().parents('.accordion').removeClass('active');
    }
  })
  $('.pop-messages .close').on('click', function () {
    closePopMessage();
  })

  checkElement($('[data-toggle="datepicker"]'),function(){
    $('[data-toggle="datepicker"]').each(function(){
      var trigger = $(this).next('.datepicker-trigger');
      if(!trigger){
        trigger =  null
      }
      $(this).datepicker(
        {
          autoHide: true,
          trigger: trigger
        }
      );
    })
  });
  checkElement($('.data-table'),function(){
    $('.data-table').DataTable();
  })
})


function showPageLoader() {
  $('.loader').show();
}
function hidePageLoader() {
  $('.loader').hide();
}

// custom input files script
'use strict';
(function ($, window, document, undefined) {
  $('.inputfile').each(function () {
    var $input = $(this),
      $label = $input.next('label'),
      labelVal = $label.html();

    $input.on('change', function (e) {
      var fileName = '';

      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      else if (e.target.value)
        fileName = e.target.value.split('\\').pop();

      if (fileName)
        $label.find('span').html(fileName);
      else
        $label.html(labelVal);
    });

    // Firefox bug fix
    $input
      .on('focus', function () { $input.addClass('has-focus'); })
      .on('blur', function () { $input.removeClass('has-focus'); });
  });
})(jQuery, window, document);



function overlayBox(overlayId) {
  if (overlayId) {
    $('.form-layout').removeClass('opened')
    $('#' + overlayId).addClass('opened');
  } else {
    console.error(overlayId + ' Div is not present in DOM')
  }
}
function closeOverlay(overlayId) {
  if (overlayId) {
    $('#' + overlayId).removeClass('opened');
  }
  else {
    $('.overlay-box').removeClass('opened')
  }
}


function closeMessage(msg) {
  msg.fadeOut();
}

var toastMsgTimeout;
function showToastMessage(msg) {
  clearTimeout(toastMsgTimeout);
  msg.addClass('active');
  var toastMsgTimeout = setTimeout(function () {
    $('.toast-message').removeClass('active')
  }, 2000)
}

function showPopMessage(msg) {
  if (msg) {
    $('.pop-messages').removeClass('show');
    $('.' + msg).addClass('show');
  }
  else {
    console.warn('function expect one parameter')
  }
}

function closePopMessage(msg) {
  if (!msg) {
    $('.pop-messages').removeClass('show');
  }
  else {
    $('.' + msg).removeClass('show')
  }
}



$(window).on('load', function () {
  $('.custom-dropdown-trigger').on('click', function () {
    if ($(this).parents('.custom-dropdown').hasClass('show')) {
      $(this).parents('.custom-dropdown').removeClass('show')
    } else {
      $(this).parents('.custom-dropdown').addClass('show')
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".custom-dropdown");
    if (!container.is(e.target) // if the target of the click isn't the container...
      &&
      container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.removeClass('show');
    }
  });
  checkElement($('.nice-editor'),function(){
    new nicEditor().panelInstance('nice-editor-id');
  })
});


function checkElement(element,cb){
  if(element.length > 0){
    cb();
  }
}
