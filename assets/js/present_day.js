document.addEventListener("DOMContentLoaded", function() {
  // Find the "Today" timeline event
  const todayEvents = document.querySelectorAll('.timeline-event');
  
  todayEvents.forEach(event => {
    const dateElement = event.querySelector('.timeline-date');
    if (dateElement && dateElement.textContent.trim() === 'Today') {
      // Get the current date
      const today = new Date();
      
      // Format the date as "Month Day, Year", e.g., "June 15, 2025"
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = today.toLocaleDateString(undefined, options);
      
      // Update the text to include today's date
      const paragraph = event.querySelector('p');
      if (paragraph) {
        paragraph.textContent = `You're visiting this website on ${formattedDate}. I hope you find it amusing.`;
      }
    }
  });
});
