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

// Wait for 3 seconds, then switch to the intro slide
setTimeout(() => {
    loadingSlide.style.display = 'none';
    introSlide.style.display = 'block';
}, 3000);

// Wait for another 3 seconds, then switch to the question slide
setTimeout(() => {
    introSlide.style.display = 'none';
    questionSlide.style.display = 'block';
}, 6000);

// Function to handle button click
function handleButtonClick() {
    const question = questionInput.value.trim(); //remove empty spaces before and after the question input

    if (question !== '') { //checking if the input is not empty
        questionSlide.style.display = 'none'; //removes the curent slide
        gearsSlide.style.display = 'block'; //shows the gears slide

        setTimeout(() => {
            gearsSlide.style.display = 'none'; //once time out is over, the gears slide gets removed
            answerSlide.style.display = 'block'; //the answer slide presented

            fetch('/answer') //the answer gets requested from the server. (promise)
                .then(response => response.json()) //receiving the answer and parcing it as json (callback function)
                .then(data => { //receving data and defining the callback function to handle it (method called on the promise)
                    const answer = data.answer;
                    displayAnswer(answer); //function with retrieved answer as argument
                })
                .catch(error => {
                    console.error('Error:', error); //handling any occuring errors
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
    const emailBody = `Check out the Magic 8 Ball answer I received: ${answer}`;
    const emailLink = `mailto:?subject=Magic 8 Ball Answer&body=${encodeURIComponent(emailBody)}`;
    window.location.href = emailLink;
}

// Function to switch to Daffy's Oracle
function switchToDaffyOracle() {
    window.location.href = './daffy.html';
}

// Add event listeners
const askButton = document.getElementById('ask-button');
askButton.addEventListener('click', handleButtonClick);

resetButton.addEventListener('click', resetApp);

shareButton.addEventListener('click', shareViaEmail);

switchVersionButton.addEventListener('click', switchToDaffyOracle);
