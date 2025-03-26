// H Noh
// ITMD 541-01 Graduate Student 

//Requirement 1 -- Change the H1 heading "Elevate Your Brand with Stellar Marketing" to "Uplift Your Brand with Stellar Marketing"
(function () {
    document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
})();

//Requirement 2 -- Change the line of text below the hero headline
(function () {
    const subHeading = document.querySelector('p.text-xl.mb-6.text-white.relative.z-20');
    if (subHeading) {
        subHeading.innerHTML = 'Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</strong></em> and <strong><em>excel</em></strong>.';
    }
})();

//Requirement 3 -- Change the background image of the hero section
(function () {
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'url("https://fastly.picsum.photos/id/683/1280/720.jpg?hmac=MorP0xeZ8ldA3Xsf3cmIbrsN-jz3Omu7piIVSyv3jMk")';
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    }
})();

//Requirement 4 -- Change the background color of the nav bar to the same color as the footer
(function () {
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundColor = '#1F2937';
    }
})();

//Requirement 5 -- Remove the “Get Started” CTA from the hero section
(function () {
    const ctaButton = Array.from(document.querySelectorAll('#hero a, #hero button'))
        .find(el => el.textContent.trim() === 'Get Started');

    if (ctaButton) {
        ctaButton.remove();
    }
})();

//Requirement 6 -- Center align the h2 headings in each section
(function () {
    const sectionHeadings = document.querySelectorAll('section h2');
    sectionHeadings.forEach(h2 => {
        h2.classList.add('text-center');
    });
})();

//Requirement 7 -- Change the icon colors in the Services section to #47C714
(function () {
    const icons = document.querySelectorAll('#services .material-symbols-outlined');
    icons.forEach(icon => {
        icon.style.color = '#47C714';
    });
})();

//Requirement 8 -- Change the Digital Marketing icon to 'ads_click'
(function () {
    const icons = document.querySelectorAll('#services .material-symbols-outlined');
    if (icons.length > 0) {
        icons[0].textContent = 'ads_click';
    }
})();

//Requirement 9 -- Change layout of product cards to show 4 across at ≥1024px
(function () {
    const productGrid = document.querySelector('[data-section="product_cards"]');
    if (productGrid) {
        productGrid.classList.remove('md:grid-cols-2');
        productGrid.classList.add('md:grid-cols-2', 'lg:grid-cols-4');
    }
})();

//Requirement 10 -- Change the Musicians image to a new one
(function () {
    const musicianImage = document.querySelector('img[alt="Musicians"]');
    if (musicianImage) {
        musicianImage.src = 'https://picsum.photos/id/453/400/300';
    }
})();

//Additional Requirements -- Handle form submission with/without name and email 
(function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const name = nameInput?.value.trim();
            const email = emailInput?.value.trim();

            if (name && email) {
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            } else {
                alert('Please provide a name and email.');
            }
        });
    }
})();

