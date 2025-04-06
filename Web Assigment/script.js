// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been updated dynamically!';
  }
  
  // Function to modify the CSS style of the paragraph
  function changeStyle() {
    const textElement = document.getElementById('styled-text');
    textElement.style.color = '#008CBA';
    textElement.style.fontWeight = 'bold';
    textElement.style.fontSize = '20px';
  }
  
  // Function to add or remove a new element
  function toggleElement() {
    const container = document.getElementById('container');
    
    // Check if the element already exists
    const existingElement = document.getElementById('new-element');
    
    if (existingElement) {
      // If the element exists, remove it
      existingElement.remove();
    } else {
      // Otherwise, create and append the new element
      const newElement = document.createElement('div');
      newElement.id = 'new-element';
      newElement.textContent = 'This is a newly added element!';
      container.appendChild(newElement);
    }
  }
  