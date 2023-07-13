// Global variables
const loadingSlide = document.getElementById('loading-slide');
const introSlide = document.getElementById('intro-slide');
const questionSlide = document.getElementById('question-slide');
const gearsSlide = document.getElementById('gears-slide');
const answerSlide = document.getElementById('answer-slide');
const questionInput = document.getElementById('question-input');
const answerContainer = document.getElementById('answer');
const shareButton = document.getElementById('share-button');
const resetButton = document.getElementById('reset-button');
const switchVersionButton = document.getElementById('switch-version-button');

// Set initial state
loadingSlide.style.display = 'block';
introSlide.style.display = 'none';
questionSlide.style.display = 'none';
gearsSlide.style.display = 'none';
answerSlide.style.display = 'none';

// Wait for 2 seconds, then switch to the intro slide
setTimeout(() => {
    loadingSlide.style.display = 'none';
    introSlide.style.display = 'block';
    setTimeout(() => {
        introSlide.style.display = 'none';
        questionSlide.style.display = 'block';
    }, 3000);
}, 3000);

// Function to handle button click
function handleButtonClick() {
    const question = questionInput.value.trim();

    if (question !== '') {
        questionSlide.style.display = 'none';
        gearsSlide.style.display = 'block';

        setTimeout(() => {
            gearsSlide.style.display = 'none';
            answerSlide.style.display = 'block';

            fetch('/answer-daffy')
                .then(response => response.json())
                .then(data => {
                    const answer = data.answer;
                    displayAnswer(answer);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }, 6000);
    }
}

// Function to display the answer
function displayAnswer(answer) {
    answerContainer.textContent = answer;
}

// Function to reset the app and go back to the question slide
function resetApp() {
    questionInput.value = '';
    answerContainer.textContent = '';
    answerSlide.style.display = 'none';
    questionSlide.style.display = 'block';
}

// Function to share via email
function shareViaEmail() {
    const answer = answerContainer.textContent;
    const emailBody = `Check out Daffy Duck's Magic 8 Ball answer I received: ${answer}`;
    const emailLink = `mailto:?subject=Daffy Duck's Magic 8 Ball Answer&body=${encodeURIComponent(emailBody)}`;
    window.location.href = emailLink;
}

// Function to switch to the Main Oracle
function switchToMainOracle() {
    window.location.href = '../index.html';
}

// Add event listeners
const askButton = document.getElementById('ask-button');
askButton.addEventListener('click', handleButtonClick);

resetButton.addEventListener('click', resetApp);

shareButton.addEventListener('click', shareViaEmail);

switchVersionButton.addEventListener('click', switchToMainOracle);
