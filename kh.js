document.getElementById('toggleMenuBtn').addEventListener('click', function() {
  var menu = document.getElementById('courseMenu');
  if (menu.style.display === 'block' || menu.style.display === '') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

function toggleMenuHeight() {
  const menu = document.getElementById('courseMenu');
  menu.classList.toggle('expanded');
}

function checkAnswer(formName, questionName, correctAnswer, resultId, nextQuestionId) {
  var form = document.getElementById(formName);
  var answer = form.elements[questionName].value;
  var result = document.getElementById(resultId);

  if (answer === correctAnswer) {
    result.textContent = "Correct!";

    // Enable the Next Question button
    var currentQuestion = document.getElementById(questionName).parentElement;
    var goButton = currentQuestion.querySelector('.goQuestion');
    if (goButton) goButton.disabled = false;
  } else {
    result.textContent = "Incorrect. Please try again.";
  }
}

function navigateQuiz(currentQuestionId, targetQuestionId) {
  var currentQuestion = document.getElementById(currentQuestionId);
  var targetQuestion = document.getElementById(targetQuestionId);

  // Check if the user has answered the current question correctly
  var currentQuestionResult = currentQuestion.querySelector('p.result').textContent;
  if (currentQuestionResult === "Correct!") {
    currentQuestion.style.display = "none";
    targetQuestion.style.display = "block";
  } else {
    alert("You must answer the current question correctly before proceeding.");
  }
}

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

document.addEventListener('DOMContentLoaded', function() {
  showSection('introduction');
});

