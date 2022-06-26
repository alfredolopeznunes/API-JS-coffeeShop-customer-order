const header = document.querySelector('header');

window.addEventListener('scroll', (e) => {
    //console.log(e.currentTarget.scrollY);
    header.classList[e.currentTarget.scrollY > 100 ? 'add' : 'remove']('scroll-active');
});