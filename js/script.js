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

  const parent = document.querySelector('[data-dropdown-menu="parent"]');
	if (parent) {
		const btn = parent.querySelector('[data-dropdown-menu="btn"]');
		const menu = parent.querySelector('[data-dropdown-menu="menu"]');

		const closeMenu = () => {
			btn.classList.remove('open');
			menu.classList.remove('open');
			menu.style.maxHeight = '0';
			document.removeEventListener('click', isClickOutside);
		}

		const openMenu = () => {
			btn.classList.add('open');
			menu.classList.add('open');
			menu.style.maxHeight = menu.scrollHeight + 'px';
			setTimeout(() => {
				document.addEventListener('click', isClickOutside);
			}, 0)
		};

		const isClickOutside = (evt) => {
			const target = evt.target;
			const itsParent = target == parent || parent.contains(target);
			const itsBtn = target === btn;
			const menuIsActive = menu.classList.contains('open');

			if (!itsParent && !itsBtn && menuIsActive) {
			  closeMenu();
			}
		};

		const isMenu = () => {
			if (menu.classList.contains('open')) {
				closeMenu();
			} else {
				openMenu();
			}
		}

		btn.addEventListener('click', isMenu)
	}
  };

initMenu(); //вызов функции 