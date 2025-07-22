export function initBurgerMenu() {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header__nav');

	if (!burger || !nav) return;

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav--active');
		burger.classList.toggle('burger--active');

		document.body.classList.toggle('no-scroll');
	});
}
