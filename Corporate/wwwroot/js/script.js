$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })
    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })
    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })

    // Counter Animation with longer duration
    function startCounters() {
        $('.counter-value').each(function() {
            const $display = $(this);
            const $target = $(this).siblings('.counter-target');
            let targetValue = $target.val();

            // Clean and parse the target value
            targetValue = targetValue.replace(/[^0-9]/g, '');
            const target = parseInt(targetValue);

            if (!isNaN(target)) {
                let current = 0;
                const duration = 4000; // Increased to 4 seconds
                const steps = 100;    // Increased steps for smoother animation
                const increment = target / steps;
                const interval = duration / steps;

                const timer = setInterval(() => {
                    current += increment;
                    
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    // Format the display value with K or M suffix
                    let displayValue;
                    if (target >= 1000000) {
                        displayValue = (Math.round(current/1000000 * 10) / 10) + 'M';
                    } else if (target >= 1000) {
                        displayValue = Math.round(current/1000) + 'K';
                    } else {
                        displayValue = Math.round(current);
                    }
                    
                    $display.text(displayValue);
                }, interval);
            }
        });
    }

    // Start counter when milestone section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const milestoneSection = document.querySelector('#milestone');
    if (milestoneSection) {
        observer.observe(milestoneSection);
    }

    // Scroll Animation Handler
    function handleScrollAnimation() {
        const sections = $('.fade-in, .zoom-out, #about');
        
        sections.each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height() * 0.8; // Trigger earlier
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('active');
            }
        });
    }

    // Handle scroll events with throttling for better performance
    let scrollTimeout;
    $(window).on('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleScrollAnimation();
                scrollTimeout = null;
            }, 10);
        }
    });
    
    // Initial check for elements in view
    setTimeout(handleScrollAnimation, 100);
});