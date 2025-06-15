document.addEventListener('DOMContentLoaded', () => {
  const events = document.querySelectorAll('.timeline-event');
  
  const handleScroll = () => {
    events.forEach(event => {
      const rect = event.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom >= 0) {
        event.classList.add('fade-in');
        event.classList.remove('fade-out');
      } else {
        event.classList.add('fade-out');
        event.classList.remove('fade-in');
      }
    });
  };
  
  // Initial check on page load
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});
