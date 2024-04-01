const moon = document.querySelector('.moon');
const logoBox = document.querySelector('.logo_box');
const aura = document.querySelector('.aura');
const auraEllipse = aura.querySelectorAll('ellipse');
const header = document.querySelector('.header');
const aboutLogo = document.querySelector('.about_logo');
const contactLayer = document.querySelector('.contact_layer');
const contactBtn = document.querySelector('.contact_btn');
const closeBtn = document.querySelector('.close_btn');
const iconBtns = document.querySelectorAll('.hover_btn');
const iconBoxes = document.querySelectorAll('.icon_set_box');


moon.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let rotateY = -1/20 * x + 10
    let rotateX = 1/20 * y - 10
    moon.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

moon.addEventListener('mouseout', () => {
    moon.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
logoBox.addEventListener('mousemove', (e) => {
    const leftEye = document.getElementById("logoAni03");
    const rightEye = document.getElementById("logoAni05");
    let x = e.offsetX
    let y = e.offsetY
    let rotateY = 1/20 * y - 15
    let rotateX = 1/20 * x - 15
    leftEye.style.transform = `translate(${rotateX}px, ${rotateY}px)`;
    rightEye.style.transform = `translate(${rotateX}px, ${rotateY}px)`;
});
logoBox.addEventListener('mouseout', () => {
    const leftEye = document.getElementById("logoAni03");
    const rightEye = document.getElementById("logoAni05");
    leftEye.style.transform = 'translate(0,0)';
    rightEye.style.transform = 'translate(0,0)';
});

auraEllipse.forEach((ellipse) => {
    moon.addEventListener('click', () => {
        if (ellipse.getAttribute('fill') === '#8F00FF') {
            ellipse.setAttribute('fill', '#FFE500');
        } else if (ellipse.getAttribute('fill') === '#FFE500') {
            ellipse.setAttribute('fill', '#0026EB');
        }else if (ellipse.getAttribute('fill') === '#0026EB') {
            ellipse.setAttribute('fill', '#00FF38');
        }else if (ellipse.getAttribute('fill') === '#00FF38') {
            ellipse.setAttribute('fill', '#8F00FF');
        }
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;

    if(scrollPosition > 1900){
        header.classList.add("blur");
    } else {
        header.classList.remove("blur");
    }
    if(scrollPosition > 500){
        aboutLogo.classList.add("active");
    }
});


contactBtn.addEventListener('click',() => {
    contactLayer.style.bottom = '0';
    document.body.style.overflow ='hidden';
})
closeBtn.addEventListener('click',() => {
    contactLayer.style.bottom = '-100dvh';
    document.body.style.overflow ='auto';
})

iconBtns.forEach((btn, index) => {
    const iconBox = iconBoxes[index]; // 현재 버튼에 해당하는 상자 선택

    btn.addEventListener('mouseover', () => {
        iconBox.style.display = 'grid'; // 해당 상자를 보이도록 설정
    });

    btn.addEventListener('mouseout', () => {
        iconBox.style.display = 'none'; // 해당 상자를 숨기도록 설정
    });
});
