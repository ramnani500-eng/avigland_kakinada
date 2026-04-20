document.addEventListener('DOMContentLoaded', () => {
    // ─── HEADER SCROLL EFFECT ───
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ─── MOBILE MENU TOGGLE ───
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // ─── FADE-IN ANIMATION ON SCROLL ───
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ─── SMOOTH SCROLL FOR BUTTONS ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── VIDEO AUTOPLAY HANDLING ───
    const video = document.querySelector('video');
    if (video) {
        video.muted = true;
        video.play().catch(error => {
            console.log("Autoplay prevented by browser:", error);
        });
    }

    // ─── STICKY CTA MOBILE LOGIC ───
    const stickyCta = document.querySelector('.sticky-cta-mobile');
    if (stickyCta) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 640) {
                if (window.scrollY > 300) {
                    stickyCta.style.display = 'grid';
                } else {
                    stickyCta.style.display = 'none';
                }
            }
        });
    }
});
