// Script for handling the hamburger menu toggle and closing it when clicking outside
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Script for handling the fade-up animation on scroll using Intersection Observer API
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;

        setTimeout(() => {
            entry.target.classList.add('show');
        }, index * 150);

        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Script for handling the horizontal scroll of the projects section
const track = document.querySelector('.projects-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const scrollAmount = track.querySelector('.project-card').offsetWidth + 30;

nextBtn.addEventListener('click', () => {
    track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    track.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Script for handling the skill progress bars animation when they come into view
const skillSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }
    });
}, {
    threshold: 0.4
});

skillObserver.observe(skillSection);