document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Back to top button functionality
  const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '&uarr;';
    button.className = 'back-to-top';
    button.title = 'Back to top';
    button.setAttribute('aria-label', 'Back to top');
    
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.display = 'none';
    button.style.padding = '10px 15px';
    button.style.backgroundColor = '#2568ba';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '18px';
    button.style.zIndex = '1000';
    
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  };
  
  createBackToTopButton();
});
