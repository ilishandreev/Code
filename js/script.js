$(document).ready(function(){
	$('.cover').tilt({
scale: 1.05
	})
})

var header = $('.header-mob'),
scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
})

//Ниже скрипт для открытия мобильно меню//

const initMenu = () => {

  const parent = document.querySelector('[data-dropdown-menu="parent"]')
	if (parent) {
		const btn = parent.querySelector('[data-dropdown-menu="btn"]')
		const menu = parent.querySelector('[data-dropdown-menu="menu"]')
		
		const openMenu = () => {
			btn.classList.toggle('open')
			menu.classList.toggle('open');
			menu.style.transition = 'max-height 0.3s';

			if (menu.classList.contains('open')) {
				menu.style.maxHeight = menu.scrollHeight + 'px';
			} else {
				menu.style.maxHeight = '0';
			}
		};

		btn.addEventListener('click', openMenu)
	}
  };

initMenu(); //вызов функции 