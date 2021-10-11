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

const initDropdownMenu = (parent) => {
	const items = parent.querySelectorAll('[data-dropdown-menu="item"]');
	const btn = parent.querySelector('[data-dropdown-menu="btn"]');
	const btnParent = btn.closest('.main-nav__item');
	let isMove = true;
  
	const isMosueLeave = (evt) => {
	  let isParent = evt.target.closest('[data-dropdown-menu="parent"]');
	  isMove = isParent ? false : true;
	};
  
	const parentMoseLeaveHandler = () => {
	  if (isMove) {
		closeMenu();
		document.removeEventListener('mousemove', isMosueLeave);
		parent.removeEventListener('mouseleave', debounce(parentMoseLeaveHandler));
	  }
	};
  
	const closeMenu = () => {
	  if (items.length >= 6) {
		items.forEach((item, index) => {
		  if (index >= 6) {
			item.classList.add('hide');
		  }
		});
  
		parent.classList.remove('open');
		btnParent.classList.remove('hide');
		document.removeEventListener('mousemove', isMosueLeave);
	  }
	};
  
	closeMenu();
  
	btn.addEventListener('click', () => {
	  items.forEach((item) => {
		if (item.classList.contains('hide')) {
		  item.classList.remove('hide');
		}
	  });
	  parent.classList.add('open');
	  btnParent.classList.add('hide');
	  document.addEventListener('mousemove', isMosueLeave);
	  parent.addEventListener('mouseleave', debounce(parentMoseLeaveHandler));
	});
  };
  
  const menuMain = () => {
	const dropdownMenuList = document.querySelectorAll('[data-dropdown-menu="parent"]');
	if (dropdownMenuList.length) {
	  dropdownMenuList.forEach((dropdownMenu) => {
		initDropdownMenu(dropdownMenu);
	  });
	}
  
  };
  
  menuMain();