var defaultPath = '../img/';
var imagePaths = ['desktop-image-hero-1.jpg', 'desktop-image-hero-2.jpg', 'desktop-image-hero-3.jpg'];
var titles = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials'];
var desc = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

var counter = 0;
var header = document.querySelector('header');
var h1 = document.querySelector('main h1');
var p = document.querySelector('main p');

function change(con) {
    if (con == 'next')
        counter++;
    else if (con == 'prev')
        counter--;
    n = counter % 3;
    if (n < 0)
        n = -n;
    header.style.background = 'url(' + defaultPath + imagePaths[n] + ') no-repeat center center/cover';
    h1.innerHTML = titles[n];
    p.innerHTML = desc[n];
}

bars = document.querySelector('.fa-bars');
nav = document.querySelector('nav');

bars.addEventListener('click', () => {
    nav.classList.toggle('show');
})