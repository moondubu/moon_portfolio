const cursor = document.querySelector('.cursor');
const click = document.querySelectorAll('button, .sub_nav div');
const revert = document.querySelectorAll('.sub_overview, .sub_draft');
const colorList =document.querySelectorAll('.sub_color li');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
});
window.addEventListener('scroll',() => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
});

click.forEach(click => {
    click.addEventListener('mouseover', function (){
        cursor.classList.add('click');
    });
    click.addEventListener('mouseout', function (){
        cursor.classList.remove('click');
    });
});
revert.forEach(click => {
    click.addEventListener('mouseover', function (){
        cursor.classList.add('revert');
    });
    click.addEventListener('mouseout', function (){
        cursor.classList.remove('revert');
    });
});
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

colorList.forEach((item)=>{
    item.style.backgroundColor = item.dataset.value
    item.innerHTML = item.dataset.value
});
