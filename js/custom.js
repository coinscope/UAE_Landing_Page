
var contactMap;

$(function() {
	initMap();
	initSelectorHolders2();
	initSlickSlider();
	initSlickSliderAr();
	initSlickFilters();
	initOwlModalHandlers2();

	function initMap(){
		contactMap = new google.maps.Map($('.contact-map')[0], {
			center: {lat: 25.6733622, lng: 55.7350362},
			zoom: 12
		});

		var marker = new google.maps.Marker({
			position: {lat: 25.6733622, lng: 55.7750362},
			map: contactMap
		});
	}

	function initSlickSliderAr(){
		$('.slick-slider-ar').slick({
			rtl:true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 1000,
			responsive: [
		    
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
				centerMode: true,
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	}

	function initSlickSlider(){
		$('.slick-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 1000,
			responsive: [
		    
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	centerMode: true,
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	}

	function initSlickFilters(){
		$('.js-filter').on('click', function(e){
			var elem = e.target;
			if ($(elem).hasClass("apartments")) {
				$('.slick-slider').slick('slickUnfilter');
				$('.slick-slider').slick('slickFilter','.apart-item');
			} else if ($(elem).hasClass("cars")) {
				$('.slick-slider').slick('slickUnfilter');
				$('.slick-slider').slick('slickFilter','.car-item');
			} else {
				$('.slick-slider').slick('slickUnfilter');
			}
			$(".js-filter").removeClass("filter-active");
			$(elem).addClass("filter-active");
		});
	}

	function initSelectorHolders2(){
		$('.selector a').on('click', function(e){
			var elem = e.target;
			var elemChoice = document.getElementsByName('selected-service')[0];
			if ($(elem).hasClass("selector-car")) {
				elemChoice.value = 'car';
				$('.cta-general').css("display","none");
				$('.cta-apartment').css("display","none");
				$('.cta-car').css("display","block");
			}
			else if ($(elem).hasClass("selector-flat")) {
				elemChoice.value = 'flat';
				$('.cta-general').css("display","none");
				$('.cta-apartment').css("display","block");
				$('.cta-car').css("display","none");
			}
			$('.selector a').removeClass("selected");
			$(elem).addClass("selected")
		});
	}

	// modal for owl
	function initOwlModalHandlers2(){
		$('body').on('click', '.slick-slider img', function(e){
			$('#owlModal .modal-body').html('<img class="img-responsive" src="' + e.target.src.slice(0, (e.target.src.length - 7)) + e.target.src.slice(-4) + '"></img>');
			$('#owlModal').modal('show')
		});
	}

	/* scrollToTop */
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

