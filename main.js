// Get references to each question's options and the "Thank You" section
const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");
const endSection = document.querySelector(".end");

// Get references to each question container
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

// Function to hide all questions except the first one and "Thank You" section
function hideAllQuestions() {
    q1.style.display = 'block';
    q2.style.display = 'none';
    q3.style.display = 'none';
    q4.style.display = 'none';
    q5.style.display = 'none';
    endSection.style.display = 'none';
}

// Function to show a specific question and hide others
function showQuestion(question) {
    hideAllQuestions();
    question.style.display = 'block';
}

// Function to handle the user's answer to a question
function handleAnswer(selectedOption, nextQuestion) {
    const options = selectedOption.parentElement.querySelectorAll("li");
    options.forEach(option => option.classList.remove("selected"));
    selectedOption.classList.add("selected");

    // Process the user's answer here (you can store it or perform any required action)

    // Show the next question or the "Thank You" section
    if (nextQuestion === endSection) {
        showEndSection();
    } else {
        showQuestion(nextQuestion);
    }
}

// Function to show the "Thank You" section after completing the survey
function showEndSection() {
    hideAllQuestions();
    endSection.style.display = 'block';
}

// Event listeners for each question's options
ul_1.addEventListener("click", function(e) {
    handleAnswer(e.target, q2);
});

ul_2.addEventListener("click", function(e) {
    handleAnswer(e.target, q3);
});

ul_3.addEventListener("click", function(e) {
    handleAnswer(e.target, q4);
});

ul_4.addEventListener("click", function(e) {
    handleAnswer(e.target, q5);
});

ul_5.addEventListener("click", function(e) {
    handleAnswer(e.target, endSection);
});

// Call the hideAllQuestions function to start the survey with the first question
hideAllQuestions();
