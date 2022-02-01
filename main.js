document.querySelector('.menu-btn').addEventListener('click', () => {
document.querySelector('.nav-menu').classList.toggle('show');
});

document.querySelector('.urlinsta').addEventListener('mouseover', () => {
document.querySelector('.instaicon').classList.toggle('showiconig');
});
document.querySelector('.urltwitter').addEventListener('mouseover', () => {
document.querySelector('.twittericon').classList.toggle('showicontr');
});
document.querySelector('.urlyoutube').addEventListener('mouseover', () => {
document.querySelector('.youtubeicon').classList.toggle('showiconyt');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cripto-post', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});

document.querySelector('.menu-coinlistscg').addEventListener('click', () => {
document.querySelector('.cg').classList.toggle('showlist');
});

