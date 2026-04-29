const sections = ['top', 'news', 'community'];
const sideItems = document.querySelectorAll('.side-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;

            sideItems.forEach(item => {
                item.classList.remove('active');
            });

            sideItems.forEach(item => {
                const href = item.getAttribute('href');
                if (href === `#${id}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.5  // La sección debe ser 50% visible para activarse
});

sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});