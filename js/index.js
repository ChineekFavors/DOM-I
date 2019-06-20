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
//anchor tags assigned text by aTags index
const aTags = document.querySelectorAll('a');
aTags.forEach((links, i) => {
  links.textContent = siteContent['nav'][`nav-item-${i + 1}`];
})
// aTags[0].textContent = "Services";
// aTags[1].textContent = "Product";
// aTags[2].textContent = "Vision";
// aTags[3].textContent = "Features";
// aTags[4].textContent = "About";
// aTags[5].textContent = "Contact";

//created new anchor tag and prepended to front of nav.
const newAtag = document.createElement('a');
newAtag.textContent = 'home';
nav.prepend(newAtag);

//created another anchor tag and appended to end of nav.
const newAtag2 = document.createElement('a');
newAtag2.textContent = 'What\'s Next';
nav.append(newAtag2);

// targeted all anchor tags and loop thru and change text color to green
const newATags = document.querySelectorAll('a');
newATags.forEach((x) => x.style.color = 'green');

 // targeted div class name cta-text and h1 inside of div 
 //updated h1 with text content then prepend h1 to div
const cta = document.querySelector('.cta-text')
 const h1 = document.querySelector('.cta-text h1');
 h1.textContent = 'DOM Is Awesome';
 cta.prepend(h1);

//targeted button, added text content
 const btn = document.querySelector('button')
 btn.textContent = 'Get Started';

//targeted img and updated image source
const img = document.getElementById('cta-img') 
img.src = "img/header-img.png";

//main content 
//selecting all h4 then assigning value using bracket notation const h4
 const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

//select all p elements assigning bracket notation to add text content
 const p = document.querySelectorAll('p');
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content']; 
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

// query selected middle img and updated source for image
const imgMiddle = document.querySelector('#middle-img');
imgMiddle.src = "img/mid-page-accent.jpg";

//query select h4 child of section class name contact
//updated h4 text content
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

//used previous querySelectorAll const p with index to update text content
//note sure on how to have a line break for p[5]
p[5].textContent = `123 Way 456 Street `;
//adding a child element to append to p[5] to creat a break
const addressAfterBreak = document.createElement('p')
addressAfterBreak.textContent = 'Somewhere, USA';
p[5].append(addressAfterBreak);

p[6].textContent = siteContent['contact']['phone'];
p[7].textContent = siteContent['contact']['email'];

// footer
p[8].textContent = siteContent['footer']['copyright'];

//just messing around with 
// added eventlistener to button to hide image when 
//clicked add background color to red toggle
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
