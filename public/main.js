// Global variables
const loadingSlide = document.getElementById('loading-slide');
const introSlide = document.getElementById('intro-slide');
const questionSlide = document.getElementById('question-slide');
const answerSlide = document.getElementById('answer-slide');
const questionInput = document.getElementById('question-input');
const answerContainer = document.getElementById('answer');
const shareButton = document.getElementById('share-button');
const resetButton = document.getElementById('reset-button');

// Set initial state
loadingSlide.style.display = 'block';
introSlide.style.display = 'none';
questionSlide.style.display = 'none';
answerSlide.style.display = 'none';

// Wait for 2 seconds, then switch to the intro slide
setTimeout(() => {
    loadingSlide.style.display = 'none';
    introSlide.style.display = 'block';
    setTimeout(() => {
        introSlide.style.display = 'none';
        questionSlide.style.display = 'block';
    }, 2000);
}, 2000);

// Function to handle button click
function handleButtonClick() {
    const question = questionInput.value.trim();

    if (question !== '') {
        questionSlide.style.display = 'none';
        answerSlide.style.display = 'block';

        fetch('/answer')
            .then(response => response.json())
            .then(data => {
                const answer = data.answer;
                displayAnswer(answer);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
    const emailBody = `Check out the Magic 8 Ball answer I received: ${answer}`;
    const emailLink = `mailto:?subject=Magic 8 Ball Answer&body=${encodeURIComponent(emailBody)}`;
    window.location.href = emailLink;
}

// Add event listeners
const askButton = document.getElementById('ask-button');
askButton.addEventListener('click', handleButtonClick);

resetButton.addEventListener('click', resetApp);

shareButton.addEventListener('click', shareViaEmail);
