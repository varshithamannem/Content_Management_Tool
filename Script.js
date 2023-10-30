// Initialize Typed.js
var typed = new Typed('#element', {
    strings: ['Student', 'Front-end developer', 'Photographer', 'Traveller'],
    typeSpeed: 50,
    loop: true
  });
  
function showCategory(category) {
    // Clear existing content
    document.getElementById('blogContent').innerHTML = '';

  
    // Fetch and display content based on the selected category
    if (category === 'webdesign') {
      document.getElementById('blogContent').innerHTML = `
        <div class="blog-post">
          <h2 class="blog-post-title">Web Design Category</h2>
          <p class="blog-post-meta">January 10, 2023 by John Doe</p>
          <p>This is a blog post about web design.</p>
        </div>
      `;
    } else if (category === 'development') {
      document.getElementById('blogContent').innerHTML = `
        <div class="blog-post">
          <h2 class="blog-post-title">Development Category</h2>
          <p class="blog-post-meta">January 15, 2023 by Jane Smith</p>
          <p>This is a blog post about development.</p>
        </div>
      `;
    } else if (category === 'photography') {
      document.getElementById('blogContent').innerHTML = `
        <div class="blog-post">
          <h2 class="blog-post-title">Photography Category</h2>
          <p class="blog-post-meta">January 20, 2023 by John Doe</p>
          <p>This is a blog post about photography.</p>
        </div>
      `;
    } else if (category === 'travel') {
      document.getElementById('blogContent').innerHTML = `
        <div class="blog-post">
          <h2 class="blog-post-title">Travel Category</h2>
          <p class="blog-post-meta">January 25, 2023 by Jane Smith</p>
          <p>This is a blog post about travel.</p>
        </div>
      `;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    const draggableElements = document.querySelectorAll(".gallery img, .gallery video");

    draggableElements.forEach(function(element) {
      element.addEventListener("dragstart", handleDragStart);
      element.addEventListener("dragend", handleDragEnd);
    });

    const dropZones = document.querySelectorAll(".section");
    
    dropZones.forEach(function(zone) {
      zone.addEventListener("dragenter", handleDragEnter);
      zone.addEventListener("dragover", handleDragOver);
      zone.addEventListener("dragleave", handleDragLeave);
      zone.addEventListener("drop", handleDrop);
    });

    let currentDragElement = null;

    function handleDragStart(event) {
      currentDragElement = event.target;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", event.target.id);
    }

    function handleDragEnd(event) {
      currentDragElement = null;
    }

    function handleDragEnter(event) {
      event.preventDefault();
      event.currentTarget.classList.add("drag-over");
    }

    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }

    function handleDragLeave(event) {
      event.currentTarget.classList.remove("drag-over");
    }

    function handleDrop(event) {
      event.preventDefault();
      event.currentTarget.classList.remove("drag-over");
      const data = event.dataTransfer.getData("text/plain");
      const element = document.getElementById(data);
      event.currentTarget.appendChild(element);
    }
  });
