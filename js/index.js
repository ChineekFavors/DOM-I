const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// navigation
const nav = document.querySelector('nav');
const aTags = document.querySelectorAll('a');
aTags[0].textContent = "Services";
aTags[1].textContent = "Product";
aTags[2].textContent = "Vision";
aTags[3].textContent = "Features";
aTags[4].textContent = "About";
aTags[5].textContent = "Contact";

const newAtag = document.createElement('a');
newAtag.textContent = 'home';
nav.prepend(newAtag);

const newAtag2 = document.createElement('a');
newAtag2.textContent = 'What\'s Next';
nav.append(newAtag2);

const newATags = document.querySelectorAll('a');
newATags.forEach((x) => x.style.color = 'green');

 // cta
const cta = document.querySelector('.cta-text')
 const h1 = document.querySelector('.cta-text h1');
 h1.textContent = 'DOM Is Awesome';
 cta.prepend(h1);

 const btn = document.querySelector('button')
 btn.textContent = 'Get Started';
 cta.append(btn);

const img = document.getElementById('cta-img') 
img.src = "img/header-img.png";

//main content 
//selecting all h4 then assigning value using bracket notation const h4
 const h4= document.querySelectorAll('h4');
 h4[0].textContent = 'Features';
 h4[1].textContent = 'About';
 h4[2].textContent = 'Services';
 h4[3].textContent = 'Product';
 h4[4].textContent = 'Vision';
//select all p elements assigning bracket notation to p
const p = document.querySelectorAll('p');
p[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const imgMiddle = document.querySelector('#middle-img');
imgMiddle.src = "img/mid-page-accent.jpg";

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

p[5].textContent = '23 Way 456 Street Somewhere, USA';
p[6].textContent = '1 (888) 888-8888';
p[7].textContent = 'sales@greatidea.io';

// footer
p[8].textContent = 'Copyright Great Idea! 2018';

// add eventlistener to button to hide image when clicked add background color to red
 btn.addEventListener('click', function(){
    btn.textContent = 'Oh it\'s started';
    btn.style.background === 'red';
    img.style.display = 'none';

    if(btn.style.background === 'red'){
        btn.style.background = 'white';
        img.style.display = 'block';
        btn.textContent = 'Get Started';
    }
    else{
        btn.style.background = 'red';
        img.style.display = 'none';
    }
 });







// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
