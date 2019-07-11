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

    // nav section

  // selecting All a tags and iterating through them
const aTags = Array.from(document.querySelectorAll('nav a'));

 //  assigning a tags there content value
aTags[0].textContent = siteContent["nav"]["nav-item-1"];
aTags[1].textContent = siteContent["nav"]["nav-item-2"];
aTags[2].textContent = siteContent["nav"]["nav-item-3"];
aTags[3].textContent = siteContent["nav"]["nav-item-4"];
aTags[4].textContent = siteContent["nav"]["nav-item-5"];
aTags[5].textContent = siteContent["nav"]["nav-item-6"];

            // cta section
const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent["cta"]["h1"];

const btn = document.querySelector('.cta-text button');
btn.textContent = siteContent["cta"]["button"];

const imgCircle = document.querySelector('.cta img');
imgCircle.setAttribute('src', siteContent["cta"]["img-src"]);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

      // main-content section
      // feature section
const h4 = document.querySelectorAll('.text-content h4'); 
h4[0].textContent = siteContent["main-content"]["features-h4"];  

const para = document.querySelectorAll('.text-content p'); 
para[0].textContent = siteContent["main-content"]["features-content"]; 

// about section
h4[1].textContent = siteContent["main-content"]["about-h4"]; 
para[1].textContent = siteContent["main-content"]["about-content"];

const imgMiddle = document.getElementById('middle-img');
imgMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom-content section
// services section
h4[2].textContent = siteContent["main-content"]["services-h4"];
para[2].textContent = siteContent["main-content"]["services-content"];

// product section
h4[3].textContent = siteContent["main-content"]["product-h4"];
para[3].textContent = siteContent["main-content"]["product-content"];

// vision section
h4[4].textContent = siteContent["main-content"]["vision-h4"];
para[4].textContent = siteContent["main-content"]["vision-content"];

// contact section
const h4Contact = document.querySelector('.contact h4');
h4Contact.textContent = siteContent["contact"]["contact-h4"];

const pContact = document.querySelectorAll('.contact p'); 
pContact[0].textContent = siteContent["contact"]["address"];
pContact[1].textContent = siteContent["contact"]["phone"];
pContact[2].textContent = siteContent["contact"]["email"];






