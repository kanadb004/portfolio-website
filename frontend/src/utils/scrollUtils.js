// Utility function for smooth scrolling
export const scrollToSection = (sectionId) => {
  // Try immediate scroll first
  let element = document.getElementById(sectionId);
  if (element) {
    performScroll(element);
    return;
  }
  
  // Wait a bit for the DOM to be ready if not found immediately
  setTimeout(() => {
    element = document.getElementById(sectionId);
    if (element) {
      performScroll(element);
    }
  }, 100);
};

const performScroll = (element) => {
  try {
    // Calculate offset for fixed header
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } catch (error) {
    // Fallback to simple scrollIntoView
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Alternative method using scrollIntoView
export const scrollToSectionAlt = (sectionId) => {
  console.log('Alternative scroll to:', sectionId);
  
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.error('Element not found:', sectionId);
    }
  }, 100);
};