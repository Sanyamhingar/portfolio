// var typed= new Typed("#text3", {
//     Strings: ['Frontend Developer', 'Video Editor', 'Cloud Practitioner'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick =() => {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle('active');

}

let sections = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll =() =>{
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach.apply(Links => {
                Links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
});

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrolly>100);

menuIcon.classList.remove('fa-x');
navbar.classlist.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 50,
});

ScrollReveal().reveal('.home-content,.heading, #prog,#portfolio, .heading2,.text2',{origin:'top'});
ScrollReveal().reveal('home-img, .about-content, .container, .portfolio, .contact',{origin:'bottom'});
ScrollReveal().reveal('.about-img,.social-media',{origin:'left'});

ScrollReveal().reveal('.wrapper',{origin:'right'});


var typed = new Typed('#element', {
    strings: ['<i> Frontend Developer</i> ', 'Cloud Practitioner', 'Video Editor'],
    typeSpeed: 100,
    backDelay: 100,
    loop:true
});    


  
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const value = skill.getAttribute('data-value');
        skill.style.width = value + '%';
    });

const percentages = document.querySelectorAll('.percentage');
    percentages.forEach(percentage => {
        const value = percentage.getAttribute('data-value');
        let counter = 0;
        const interval = setInterval(() => {
            if (counter <= value) {
                percentage.textContent = counter + '%';
                counter++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });

    const circleSkills = document.querySelectorAll('.circle-progress');
    circleSkills.forEach(circleSkill => {
        const value = circleSkill.getAttribute('data-value');
        circleSkill.style.transform = `rotate(${value * 1.8}deg)`;
    });

    const circlePercentages = document.querySelectorAll('.circle-percentage');
    circlePercentages.forEach(circlePercentage => {
        const value = circlePercentage.previousElementSibling.getAttribute('data-value');
        let counter = 0;
        const interval = setInterval(() => {
            if (counter <= value) {
                circlePercentage.textContent = counter + '%';
                counter++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
});
