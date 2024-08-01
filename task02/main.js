// var typed= new Typed("#text3", {
//     Strings: ['Frontend Developer', 'Video Editor', 'Cloud Practitioner'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });
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
