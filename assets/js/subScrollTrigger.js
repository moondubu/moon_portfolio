window.addEventListener('load', function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
        document.querySelectorAll('.sub_draft .sub_cont').forEach((draft) => {
            // Renewal rows animate their children, so their parent must stay stationary.
            if (draft.querySelector('.renewal_row')) return;

            gsap.fromTo(draft, {
                y: 150,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: draft,
                    start: 'top 90%',
                    end: 'top 45%',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        });

        document.querySelectorAll('.bilrigo_uxui .sub_draft .renewal_row').forEach((row) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            timeline.fromTo(row.querySelectorAll('.renewal_screen'), {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'none',
            }).fromTo(row.querySelectorAll('.renewal_note'), {
                y: 32,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'none',
            }, 0.25);

            const connectors = row.querySelector('.renewal_connectors');
            if (connectors) {
                timeline.fromTo(connectors, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'none',
                }, 0.45);
            }
        });

        const pethroomRows = document.querySelectorAll(
            '.pethroom .event_primary, .pethroom .event_secondary, .pethroom .new_vip, ' +
            '.pethroom .new_friends, .pethroom .renewal_comparison, .pethroom .renewal_home, ' +
            '.pethroom .renewal_gallery, .pethroom .responsive_screens'
        );
        pethroomRows.forEach((row) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
            timeline.fromTo(row.querySelectorAll('.event_screen, :scope > figure'), {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'none',
            });

            const notes = row.querySelectorAll('.event_note');
            if (notes.length) {
                timeline.fromTo(notes, {
                    y: 32,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'none',
                }, 0.25);
            }
            const connectors = row.querySelector('.event_connectors, .project_connectors');
            if (connectors) {
                timeline.fromTo(connectors, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'none',
                }, 0.45);
            }
        });

        document.querySelectorAll('.bilrigo_uxui .color_scale').forEach((scale) => {
            scale.classList.add('is-revealing');
            gsap.fromTo(scale, {
                opacity: 0,
                y: 8,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                onComplete: () => scale.classList.remove('is-revealing'),
                scrollTrigger: {
                    trigger: scale,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    once: true,
                },
            });
        });

        const analysis = document.querySelector('.bilrigo_uxui .ux_analysis_diagram');
        if (analysis) {
            const chartStart = 0.2;
            const chartDuration = 1.75;
            const heatmapStart = chartStart + chartDuration / 2;
            const analysisEnd = 3.36;
            const timeline = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: analysis,
                    start: 'top 85%',
                    end: 'bottom 70%',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
            const fadeUp = { opacity: 0, y: 32 };
            const visible = { opacity: 1, y: 0, duration: 0.4, ease: 'none' };

            // Reveal the original rounded slices through a clockwise circular mask.
            timeline.fromTo(analysis.querySelector('.chart_reveal'), {
                attr: { 'stroke-dashoffset': 1 },
            }, {
                attr: { 'stroke-dashoffset': 0 },
                duration: chartDuration,
            }, chartStart);

            timeline.fromTo(analysis.querySelector('.chart_labels'), fadeUp, {
                ...visible,
                duration: chartDuration,
            }, chartStart)
                .fromTo(analysis.querySelectorAll('.click_connector'), { opacity: 0 }, { opacity: 1, duration: chartDuration }, chartStart)
                .fromTo(analysis.querySelectorAll('.click_note h4, .click_note p'), fadeUp, { ...visible, duration: chartDuration }, chartStart)
                .fromTo(analysis.querySelector('.heatmap_screen'), { opacity: 0 }, { opacity: 1, duration: 0.6 }, heatmapStart)
                .fromTo(analysis.querySelector('.heatmap_details'), fadeUp, { ...visible, duration: 0.6 }, heatmapStart + 0.6)
                .fromTo(analysis.querySelector('.heatmap_table'), fadeUp, { ...visible, duration: analysisEnd - heatmapStart - 1.2 }, heatmapStart + 1.2)
                .fromTo(analysis.querySelectorAll('.heatmap_connector'), { opacity: 0 }, { opacity: 1, duration: analysisEnd - heatmapStart }, heatmapStart)
                .fromTo(analysis.querySelectorAll('.scroll_note h4, .scroll_note p'), fadeUp, { ...visible, duration: analysisEnd - heatmapStart }, heatmapStart);
        }

        const footer = document.querySelector('.sub_footer');
        if (footer) {
            gsap.to(footer, {
                backgroundPosition: '50% 50%',
                scrollTrigger: {
                    trigger: footer,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 2,
                },
            });
        }
        return () => {
            document.querySelectorAll('.bilrigo_uxui .color_scale').forEach((scale) => {
                scale.classList.remove('is-revealing');
            });
        };
    });

    // Font metrics can change the scroll positions after images have loaded.
    if (document.fonts) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
    } else {
        ScrollTrigger.refresh();
    }
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) ScrollTrigger.refresh();
    });
});
