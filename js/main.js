

$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;
	
	

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.play').hide(); // Oculta el botón de play
	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pause').click(pauseSlider);
	$('.play span').click(playSlider);

	$('.pagination li').click(pagination);

	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	// INICIA EL CARRUSEL AL ENTRAR A LA PÁGINA
	const intervalo = setInterval(()=>{
		nextSlider();
	}, 1000);


	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	
	function pauseSlider(){
		$('.play').show();
		$('.pause').hide();
		
		clearInterval(intervalo);
	}
	function playSlider(){
		$('.pause').show();
		$('.play').hide();
		
		const intervalo = setInterval(()=>{
			nextSlider();
		}, 1000,);
		
	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});


$(
	function(){
		$("#icon1").mouseenter(
			function(){
				$("#icon1").css({"background-color":"#99f"})
			}
		)
		$("#icon1").mouseleave(
			function(){;
				$("#icon1").css({"background-color":"#fff"})
			}
		)
		$("#icon2").mouseenter(
			function(){
				$("#icon2").css({"background-color":"red"})
			}
		)
		$("#icon2").mouseleave(
			function(){;
				$("#icon2").css({"background-color":"#fff"})
			}
		)
		$("#icon3").mouseenter(
			function(){
				$("#icon3").css({"background-color":"blue"})
			}
		)
		$("#icon3").mouseleave(
			function(){;
				$("#icon3").css({"background-color":"#fff"})
			}
		)
	}
)