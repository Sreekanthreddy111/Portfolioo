function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
]
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

// JavaScript for Projects Section
// Add this to your existing script.js file

// This function will initialize project animations when they come into view
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // For each project card, add a slight delay to animate them sequentially
    projectCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 200 * index);
    });
  }
  
  // Filter projects functionality (optional)
  function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length) return;
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else {
            const tags = card.querySelector('.project-tags').textContent.toLowerCase();
            if (tags.includes(filterValue.toLowerCase())) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize project animations
    initProjectAnimations();
    
    // Initialize filters if they exist
    setupProjectFilters();
  });


