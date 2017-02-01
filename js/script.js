// // Слайдер с табами

		var openGuide = document.querySelector(".guide-control");
		var showGuide = document.querySelector("#fake-slide-page");
		var openCharact = document.querySelector(".charact-control");
		var showCharact = document.querySelector("#charact-slide");
		var openAvail = document.querySelector(".avail-control");
		var showAvail = document.querySelector("#avail-slide");
		var openReviews = document.querySelector(".reviews-control");
		var showReviews = document.querySelector("#reviews-slide");



		openCharact.addEventListener("click", function(event) {
			event.preventDefault();
			showCharact.classList.remove("close-slide");
			showCharact.classList.add("show-slide");
			showGuide.classList.remove("show-slide");
			showAvail.classList.remove("show-slide");
			showReviews.classList.remove("show-slide");
		});

		openGuide.addEventListener("click", function(event) {
			event.preventDefault();
			showGuide.classList.add("show-slide");
			showAvail.classList.remove("show-slide");
			showReviews.classList.remove("show-slide");
			showCharact.classList.add("close-slide");

		})

		openAvail.addEventListener("click", function(event) {
			event.preventDefault();
			showAvail.classList.add("show-slide");
			showCharact.classList.add("close-slide");
			showGuide.classList.remove("show-slide");
			showReviews.classList.remove("show-slide");
		})

		openReviews.addEventListener("click", function(event) {
			event.preventDefault();
			showReviews.classList.add("show-slide");
			showCharact.classList.add("close-slide");
			showAvail.classList.remove("show-slide");
			showGuide.classList.remove("show-slide")
		});


// 		// Галерея велосипедов
		var openImg1 = document.querySelector(".img-link-1");
	var showImg1 = document.querySelector(".active-img");
	var openImg2 = document.querySelector(".img-link-2");
	var showImg2 = document.querySelector(".hidden-img");

	openImg1.addEventListener("click", function(event) {
		event.preventDefault();
		showImg1.classList.remove("close-image");
		showImg1.classList.add("show-image");
		showImg2.classList.remove("show-image");
	})

	openImg2.addEventListener("click", function(event) {
		event.preventDefault();
		showImg1.classList.remove("show-image");
		showImg1.classList.add("close-image");
		showImg2.classList.add("show-image");
	})


// // Быстрая покупка

	var openModalBuy = document.querySelector(".item-buy_fast");
	var showModalBuy = document.querySelector(".modal-buy"); 
	var closeModalBuy = showModalBuy.querySelector(".modal-close");
	var overlay = document.querySelector(".overlay");

	openModalBuy.addEventListener("click", function(event) {
	event.preventDefault();
	showModalBuy.classList.add("show-modal");
	overlay.classList.add("show-overlay");
	})

	closeModalBuy.addEventListener("click", function(event) {
		event.preventDefault();
		showModalBuy.classList.remove("show-modal");
		overlay.classList.remove("show-overlay");
	})

	overlay.addEventListener("click", function(event) {
		showModalBuy.classList.remove("show-modal");
		overlay.classList.remove("show-overlay");
	})

	window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (showModalBuy.classList.contains("show-modal")) {
				showModalBuy.classList.remove("show-modal");
				overlay.classList.remove("show-overlay");
		}
	}
	});

// Добавление в корзину

		var openModalBasket = document.querySelectorAll(".item-buy");
		var showModalBasket = document.querySelectorAll(".modal-basket");
		var closeModalBasket = document.querySelectorAll(".modal-close");
		var buyMore = document.querySelectorAll(".buy-more-btn");
		var overlay = document.querySelector(".overlay");

		for(var i = 0; i < openModalBasket.length; i++){
  			openModalBasket[i].addEventListener("click", function(event) {
    			event.preventDefault();
    			showModalBasket[0].classList.add("show-modal-basket");
   		 		overlay.classList.add("show-overlay");
  			});
		};

		for(var i = 0; i < closeModalBasket.length; i++){
  			closeModalBasket[i].addEventListener("click", function(event) {
   				event.preventDefault();
    			showModalBasket[0].classList.remove("show-modal-basket");
    			overlay.classList.remove("show-overlay");
 		 	});
		};

		for(var i = 0; i < buyMore.length; i++){
  			buyMore[i].addEventListener("click", function(event) {
   				event.preventDefault();
    			showModalBasket[0].classList.remove("show-modal-basket");
    			overlay.classList.remove("show-overlay");
 		 	});
		};

		for(var i = 0; i < overlay.length; i++){
  			overlay[i].addEventListener("click", function(event) {
   				event.preventDefault();
    			showModalBasket[0].classList.remove("show-modal-basket");
    			overlay.classList.remove("show-overlay");
 		 	});
		};


		// Модальное меню

		var openMenu = document.querySelector(".menu_burger");
		var showMenu = document.querySelector(".adaptive_menu");
		var closeMenu = document.querySelector(".close-menu_btn");
		var overlay = document.querySelector(".overlay");

		openMenu.addEventListener("click", function(event) {
			event.preventDefault();
			showMenu.classList.add("show-adaptive-menu");
		})

		closeMenu.addEventListener("click", function(event) {
			event.preventDefault();
			showMenu.classList.remove("show-adaptive-menu");
		})