export function setRealVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setRealVH);
window.addEventListener('orientationchange', setRealVH);