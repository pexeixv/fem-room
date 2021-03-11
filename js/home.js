var defaultPath = '../img/';
var slides = [
    {
        "title": 'Discover innovative ways to decorate',
        "desc": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        "image": 'desktop-image-hero-1.jpg'
    },
    {
        "title": 'We are available all across the globe',
        "desc": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        "image": 'desktop-image-hero-2.jpg'
    },
    {
        "title": 'Manufactured with the best materials',
        "desc": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        "image": 'desktop-image-hero-3.jpg'
    }
];





var counter = 0;
var header = document.querySelector('header');
var h1 = document.querySelector('main h1');
var p = document.querySelector('main p');
var a = document.querySelector('main > a');

function change(con) {
    if (con == 'next')
        counter++;
    else if (con == 'prev')
        counter--;
    n = counter % 3;
    if (n < 0)
        n = -n;
    header.style.background = 'url(' + defaultPath + slides[n].image + ') no-repeat center center/cover';

    setTimeout(function () {
        a.style.opacity = 0;
    }, 200);
    setTimeout(function () {
        p.style.opacity = 0;
    }, 400);
    setTimeout(function () {
        h1.style.opacity = 0;
    }, 600);

    setTimeout(function () {
        h1.innerHTML = slides[n].title;
        h1.style.opacity = 1;
    }, 1000);
    setTimeout(function () {
        p.innerHTML = slides[n].desc;
        p.style.opacity = 1;
    }, 1200);
    setTimeout(function () {
        a.style.opacity = 1;
    }, 1400);
}




ham = document.querySelector('.hamburger');
nav = document.querySelector('nav');
bars = document.querySelectorAll('.hamburger .bar');
bar1 = document.querySelector('.hamburger .bar1');
bar2 = document.querySelector('.hamburger .bar2');
bar3 = document.querySelector('.hamburger .bar3');


ham.addEventListener('click', () => {
    cond = nav.classList.toggle('show');
    bars.forEach(bar => {
        if (cond)
            bar.style.background = 'gray';
        else bar.style.background = 'white';
    })
    if (cond) {
        // ham.style.transform = 'translateX(-10px)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(-45deg) translate(10px,-4.5px)';
        bar1.style.transform = 'rotate(45deg) translate(10px,4.5px)';

    } else {
        bar2.style.opacity = '1';
        bar3.style.transform = 'none';
        bar1.style.transform = 'none';
    }
})



