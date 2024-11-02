document.addEventListener('DOMContentLoaded', () => {
  const events = document.querySelectorAll('.timeline-event');

  console.log('Events found:', events.length);  // Debugging line

  if (events.length === 0) {
    console.warn('No .timeline-event elements found');
  } else {
    events.forEach(event => console.log('Event found:', event)); // Should log each event
  }

  const onScroll = () => {
    events.forEach(event => {
      const rect = event.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        event.classList.add('visible');
      } else {
        event.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
});
