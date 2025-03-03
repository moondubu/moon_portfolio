document.addEventListener("DOMContentLoaded", (event) => {
    const section2Height = document.querySelector('.section_02').offsetHeight;
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.section_02',
            start:'10% 80%',
            end:'100% 100%',
            scrub:1
        }
    })
    .from('.section_02 .inner',{
        y:'300',
        duration:1,
        ease:'none',
        opacity:0,
    });
    ScrollTrigger.create({
        trigger:'.section_02',
        start:'top tpp',
        pin:true,
        pinSpacing:false
    });

    const moreBtn = document.querySelector('.more_btn');
    moreBtn.addEventListener('click',() => {
        if (!moreBtn.classList.contains('disabled')) {
            let tl = gsap.timeline();
            let items = Array.from(document.querySelectorAll('.experience_wrap li')).slice(-4);

            if (moreBtn.textContent === 'MORE VIEW') {
                moreBtn.textContent = 'FOLD';
                moreBtn.classList.add('disabled');

                items.forEach((item,index) => {
                    if (item.classList.contains('hide')) {
                        tl.from(item, {
                            duration: 0.5,
                            opacity: 0,
                            y: 30,
                            ease: 'power3.out',
                            onComplete: function() {
                                if (index === items.length - 1) {
                                    moreBtn.classList.remove('disabled');
                                }
                            }
                        });
                        item.classList.remove('hide');
                    }
                });
            } else {
                items.forEach((item) => {
                    moreBtn.textContent = 'MORE VIEW';
                    moreBtn.classList.remove('disabled');
                    item.classList.add('hide');
                });
            }
        }
    });
});
