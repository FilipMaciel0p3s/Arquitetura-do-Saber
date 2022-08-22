    const nav = document.querySelector('#header nav')
    const toggle = document.querySelectorAll('nav .toggle')

    for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
    }

    const links = document.querySelectorAll('nav ul li a')

    for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
    }

    /* mudar o header da página quando der scroll */
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
    })


    const sections = document.querySelectorAll('main section[id]')
    function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
        document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
        document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
    }

    jQuery("document").ready(function($){
    
        var nav = $('.nav-container');
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 136) {
                nav.addClass("f-nav");
            } else {
                nav.removeClass("f-nav");
            }
        });
    
    });

    window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
    })