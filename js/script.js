// Слайдер с табами

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


		// Галерея велосипедов
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


// Быстрая покупка

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

		var openModalBasket = document.querySelector(".item-buy");
		var showModalBasket = document.querySelector(".modal-basket");
		var closeModalBasket = showModalBasket.querySelector(".modal-close");
		var buyMore = document.querySelector(".buy-more-btn");

		openModalBasket.addEventListener("click", function(event) {
			showModalBasket.classList.add("show-modal-basket");
			overlay.classList.add("show-overlay");
		});

		closeModalBasket.addEventListener("click", function(event) {
			event.preventDefault();
			showModalBasket.classList.remove("show-modal-basket");
			overlay.classList.remove("show-overlay");
		});

		overlay.addEventListener("click", function(event) {
			showModalBasket.classList.remove("show-modal-basket");
			overlay.classList.remove("show-overlay");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (showModalBasket.classList.contains("show-modal-basket")) {
					showModalBasket.classList.remove("show-modal-basket");
					overlay.classList.remove("show-overlay");
				}
			}
		});

		buyMore.addEventListener("click", function(event) {
			event.preventDefault();
			showModalBasket.classList.remove("show-modal-basket");
			overlay.classList.remove("show-overlay");
		})

