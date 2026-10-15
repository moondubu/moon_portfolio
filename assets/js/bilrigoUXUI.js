window.addEventListener('load', function () {
    const marqueeGroup = document.querySelector('.bilrigo_uxui .renewal_marquee_group');
    if (marqueeGroup && !marqueeGroup.nextElementSibling) {
        const clone = marqueeGroup.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        marqueeGroup.parentElement.appendChild(clone);
    }
});
