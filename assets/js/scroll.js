document.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item'); // Adjust class name as necessary

    timelineItems.forEach(item => {
        const bounding = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bounding.top < windowHeight && bounding.bottom >= 0) {
            item.classList.add('fade-in');
            item.classList.remove('fade-out');
        } else {
            item.classList.add('fade-out');
            item.classList.remove('fade-in');
        }
    });
});
