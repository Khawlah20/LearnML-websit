document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggleMenuBtn').addEventListener('click', function() {
    var menu = document.getElementById('courseMenu');
    if (menu.style.display === 'block' || menu.style.display === '') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });

  document.querySelectorAll('.submitQuestion').forEach(button => {
    button.addEventListener('click', function() {
      const form = button.closest('form');
      const questionDiv = button.closest('div');
      const questionName = Array.from(questionDiv.querySelectorAll('input[type=radio]'))
        .filter(input => input.checked)[0]?.name;
      const correctAnswer = {
        'q1': 'a',
        'q2': 'a',
        'q3': 'a',
        'q4': 'a',
        'q5': 'a',
        'q6': 'b',
        'q7': 'a',
        'q8': 'a',
        'q9': 'a',
        'q10': 'a',
        'q11': 'a',
        'q12': 'a',
        'q13': 'b',
        'q14': 'b',
        'q15': 'a',
        'q16': 'a',
        // Add correct answers for additional questions as needed
      }[questionName];

      const userAnswer = form.elements[questionName]?.value;
      const resultId = questionDiv.querySelector('p').id;
      const result = document.getElementById(resultId);

      if (userAnswer === correctAnswer) {
        result.textContent = "Correct!";
        questionDiv.setAttribute('data-correct', 'true');
        const goButton = questionDiv.querySelector('.goQuestion');
        if (goButton) {
          goButton.disabled = false;
        }
      } else {
        result.textContent = "Incorrect. Please try again.";
        questionDiv.setAttribute('data-correct', 'false');
      }
    });
  });

  showSection('introduction');
});

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
    const videos = section.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  });
  document.getElementById(sectionId).style.display = 'block';
}

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function navigate(currentSection, targetSection) {
  document.getElementById(currentSection).style.display = 'none';
  document.getElementById(targetSection).style.display = 'block';

  // Stop videos in the current section
  const currentVideos = document.getElementById(currentSection).querySelectorAll('video');
  currentVideos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  // Play the video in the target section if it exists
  const targetVideos = document.getElementById(targetSection).querySelectorAll('video');
  targetVideos.forEach(video => {
    video.play();
  });
}

function highlightLocation(locationId) {
  document.querySelectorAll('path').forEach(path => {
    path.setAttribute('visibility', 'hidden'); // Hide all paths
  });
  document.getElementById(locationId.toLowerCase()).setAttribute('visibility', 'visible'); // Show selected location
}

function highlightAllLocations() {
  document.querySelectorAll('path').forEach(path => {
    path.setAttribute('visibility', 'visible'); // Show all paths
  });
}

function showLocation(name) {
  alert("Showing details for: " + name);
}
function toggleMenuHeight() {
  const menu = document.getElementById('courseMenu');
  menu.classList.toggle('expanded');
}