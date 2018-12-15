/*===================================================================================================
										JavaScript
=====================================================================================================*/
	



/*=======================================================================================================
										jQuery
=======================================================================================================*/
$(function()
{
	
	/* navigation bar / navs
	============================== */
	function navbar$$()
	{
		// nav .btn change
		$('#nav-btn').click
		(
			function()
			{
				var
				elm$ = $( '#nav-btn span' ),
				cls1$ = 'flaticon-menu-button-of-three-horizontal-lines',
				cls2$ = 'flaticon-up-arrow';

				if( elm$.hasClass(cls1$) )
				{
					elm$.addClass(cls2$);
					elm$.removeClass(cls1$);
				}
				else
				{
					elm$.addClass(cls1$);
					elm$.removeClass(cls2$);
				}
				
			}
		
		);


		// navbar sticky
		$(".sticky-point").waypoint
		(
			function(direction)
			{
				var
				elm$ = $('.main-navbar'),
				elm2$ = $('.main-navbar .nav-1 li .dropdown-menu'),
				cls1$ = 'fixed-navbar',
				cls2$ = 'slideInDown';
				
				if( direction == "down" )
				{
					elm$.addClass(cls1$);
					elm$.addClass(cls2$);
					elm2$.css( { background: '#777' } );
				}
				else
				{
					elm$.removeClass(cls1$);
					elm$.removeClass(cls2$);
					elm2$.css( { background: '#eb607c' } );
				}
			}
		);

		// recent nav
		$('.section-recent .nav').delegate
		(
			'li', 'click',function()
			{
				$(this).addClass('active-a').siblings().removeClass('active-a');
			}
		);

		// active service details
		$('.section-service_details .nav').delegate
		(
			'li', 'click',function()
			{
				$(this).addClass('active-li').siblings().removeClass('active-li');
			}
		);

		// right-side flex-column
		$('.right-side .content .flex-column').delegate
		(
			'li', 'click',function()
			{
				$(this).addClass('active-a').siblings().removeClass('active-a');
			}
		);


		//  nav-pills [ for page-navigation and sidebar nav-pills ]
		$('.nav-pills').delegate
		(
			'li', 'click',function()
			{
				$(this).addClass('active-li').siblings().removeClass('active-li');
			}
		);
	
	} navbar$$();

	

	/* scroll up 
	======================  */
	function scroll_up$$()
	{
		// sticky
		$('.sticky-point').waypoint
		(
			function( direction )
			{
				var elm$ = $('.scroll-up');
				if( direction == 'down' )
				{
					elm$.css( {display: 'block'} );
					elm$.addClass('bounceIn');
				}
				else
				{
					elm$.css( {display: 'none'} );
					elm$.removeClass('bounceIn');
				}
			}
		);
		
		// scrolling up
		$('.scroll-up').click
		(
			function()
			{
				$('html, body').animate
				(
					{ scrollTop: $('.pre-header').offset().top }, 1000
				);
			}
		);

	} scroll_up$$();


	
	
	/* calling parallax
	=========================*/
	function parallax$$()
	{
		var window$ = $(window);
		// Parallax background effect
		$('div[data-type="background"]').each
		(
			function()
			{
				var bg_obj$ = $(this); // assigning the object
				
				window$.scroll
				(
					function()
					{
						// scroll the background at var speed
						// the yPos is a negative value because we're scrolling it UP!
						
						var yPos$ = -(window$.scrollTop() / bg_obj$.data('speed'));
						
						// Put together our final background position
						var coords$ = '5-% ' + yPos$ + 'px';
						
						//Move the background
						bg_obj$.css({ backgroundPosition: coords$ });
					}

				); // end window scroll
				
			}
		);

	} parallax$$();
	
	
	
	function carousel$$()
	{
		// testimony carousel
		$( ".section-testimony .owl-carousel" ).owlCarousel
		({
			dotsEach:1,
			center: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3500,
			dragEndSpeed: 2000,
			smartSpeed: 2000,
			autoplayHoverPause: true,
			responsive:
			{
				992: { items: 2 },
				240: { items: 1 }
			}
	
		});
		
		// assosiates carousel
		$( ".section-partner .owl-carousel" ).owlCarousel
		({
			center: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,
			dragEndSpeed: 1000,
			smartSpeed: 3000,
			autoplayHoverPause:true,
			responsive: 
			{
				992: { items: 3 },
				240: { items: 2 }
			}
		});

		$( ".single-product .owl-carousel" ).owlCarousel
		({
			center: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause:true,
			navText: [$('.am-next'),$('.am-prev')],
			margin: 30,
			responsive:
			{
				992: { items: 3 },
				768: { items: 2 },
				240: { items: 1 }
			}
	
		});
		
	} carousel$$();
	


	/* calling Other plugins and functions
	======================================== */
	function other_plugin$$()
	{
		// #pre-header btn
		$( '#pre-btn' ).click
		(
			function()
			{	
				$( '.pre-header .content-block' ).slideToggle(300);
	
				var
				elm$ = $(this),
				cls1$ = 'flaticon-up-arrow',
				cls2$ = 'flaticon-angle-arrow-down';
				if( elm$.hasClass( cls1$) )
				{
					elm$.addClass( cls2$ );
					elm$.removeClass( cls1$ );
				}
				else
				{
					elm$.addClass( cls1$ );
					elm$.removeClass( cls2$ );
				}
			}
			
		);


		// vegas
		$(".header").vegas
		({
			slides:
			[
				{ src: 'res/image/header_bg/header_bg_1.jpg' },
				{ src: 'res/image/header_bg/header_bg_2.jpg' },
				{ src: 'res/image/header_bg/header_bg_3.jpg' }
			]
		});



		// fancybox thumbnail
		$().fancybox
		(
			{
				selector: "[data-fancybox='filter']:visible",
				thumbs:
				{
					autoStart: true
				}
			}
		);


		// counter
		$('.section-fact .counter').counterUp
		({
			delay: 20,
			time: 1000
		});

		// shop product changing image on click
		$('.single-product .img-section .thumb a').click
		(
			function(e)
			{
				e.preventDefault();
				$('.single-product .img-section .img-box img').attr( 'src', $(this).attr('href') );
				$('.single-product .img-section .img-box a').attr( 'href', $(this).attr('href') );
			}
		);


		// section-qna q-block icon toggle
		$( '.section-qna .qna-block .q-block a' ).click
		(
			function()
			{
				$( this ).toggleClass('a');
			}
		
		);

	} other_plugin$$();
    
}); // jQuery






