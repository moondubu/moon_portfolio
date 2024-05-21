window.addEventListener('load', function () {
    setTimeout(function () {
        gsap.registerPlugin(ScrollTrigger);

        let drafts = gsap.utils.toArray(".sub_draft .sub_cont")
        drafts.forEach((draft, i) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: draft,
                    start:'20% 90%',
                    end:'60% 90%',
                    scrub:1,
                }
            })
            .from(draft, {
                y:150,
                duration:1,
                opacity:0,
            })
        });
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
