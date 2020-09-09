// on ready function
  $(document).ready(function() {
	"use strict";
	
	//hl sidebar js
	
	// $('.gd_fev_toggle').on('click', function(e) {
    //     e.preventDefault();
    //     var mask = '<div class="mask-overlay">'; 
    //     $('body').toggleClass('active');
    //     $(mask).hide().appendTo('body').fadeIn('fast');
    //     $('.mask-overlay, .manu-close').on('click', function() {
    //         $('body').removeClass('active');
    //         $('.mask-overlay').remove();
    //     });
    // });
	
	$('input,textarea').focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});

	$('input,textarea').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
		$(this).removeClass('filled');
		$(this).parents('.form-group').removeClass('focused');  
	  } else {
		$(this).addClass('filled');
	  }
	}) 
	
	//profile dropdown js
	  $(".br_profile_toggle").on("click", function(e) {
		$(".br_profile_list").slideToggle();
		e.stopPropagation();
	  });

	  $(document).on("click", function(e) {
		if (!e.target.closest(".br_profile_list")) {
		  $(".br_profile_list").slideUp();
		}
	  });
	  
	  //sub menu dropdown js
	  $('.in_setting_sub').on('click', function(){
		this.classList.toggle("change");
		$('.ss_menu').slideToggle();
	});
	
	//hl custom Image Upload js
	
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#imagePreview').css('background-image', 'url('+e.target.result +')');
				$('#imagePreview').hide();
				$('#imagePreview').fadeIn(650);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#imageUpload").change(function() {
		readURL(this);
	});
	
	//hl sidebar js
	
	$('.pr_toggle').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('body').toggleClass('active');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .manu-close').on('click', function() {
            $('body').removeClass('active');
            $('.mask-overlay').remove();
        });
    });

});