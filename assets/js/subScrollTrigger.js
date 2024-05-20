window.addEventListener('load', function () {
    setTimeout(function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({
            scrollTrigger:{
                trigger:'.sub_draft',
                start:'10% 80%',
                end:'60% 80%',
                scrub:2,
            }
        })
        .from('.draft_01',{
            y:'300',
            duration:1,
            opacity:0,
        })
        .from('.draft_02',{
            y:'300',
            duration:1,
            opacity:0,
        })
        .from('.draft_03',{
            y:'300',
            duration:1,
            opacity:0,
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:'.sub_footer',
                start:'0 100%',
                end:'100% 100%',
                scrub:2,
            }
        })
        .to(".sub_footer", {
            backgroundPosition:'50% 50%',
        });
    }, 2500);
});
