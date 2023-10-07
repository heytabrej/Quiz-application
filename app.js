//start code
//20 Jul 2020
//Al Nahian | https://alnahian.xyz

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
// //function to disappear welcome message
document.querySelector(".start-btn").addEventListener("click", disappear);

function disappear() {
    document.querySelector(".welcome-message").style.display = "none";
}

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    // Existing questions...
    {
      question: "How many countries in the world?",
      answers: [
        { text: '313', correct: false },
        { text: '212', correct: false },
        { text: '256', correct: false },
        { text: '195', correct: true }
      ]
    },
    {
        question: 'When is National Mother Language Day?',
        answers: [
          { text: '5 January', correct: false },
          { text: '16 December', correct: false },
          { text: '21 February', correct: true },
          { text: '6 March', correct: false }
        ]
      },
    {
        question: 'What is the capital of France?',
        answers: [
          { text: 'Paris', correct: true },
          { text: 'Berlin', correct: false },
          { text: 'Madrid', correct: false },
          { text: 'Rome', correct: false }
        ]
      },
      {
        question: 'Which gas do plants absorb from the atmosphere?',
        answers: [
          { text: 'Oxygen', correct: false },
          { text: 'Carbon Dioxide', correct: true },
          { text: 'Nitrogen', correct: false },
          { text: 'Hydrogen', correct: false }
        ]
      },    
    {
      question: 'Where "The Holy Kaaba" is located?',
      answers: [
        { text: 'Saudi Arabia', correct: true },
        { text: 'Morocco', correct: false },
        { text: 'Italy', correct: false },
        { text: 'German', correct: false }
      ]
    },
    {
      question: 'What is the sweetest language in the world?',
      answers: [
        { text: 'French', correct: false },
        { text: 'English', correct: false },
        { text: 'Bengali', correct: true },
        { text: 'Polish', correct: false }
      ]
    },
    {
        question: 'What is the largest ocean in the world?',
        answers: [
          { text: 'Atlantic Ocean', correct: false },
          { text: 'Arctic Ocean', correct: false },
          { text: 'Indian Ocean', correct: false },
          { text: 'Pacific Ocean', correct: true }
        ]
      },
      {
        question: 'Which element is the most abundant in Earth\'s crust?',
        answers: [
          { text: 'Oxygen', correct: true },
          { text: 'Silicon', correct: false },
          { text: 'Aluminum', correct: false },
          { text: 'Iron', correct: false }
        ]
      },
      {
        question: 'Which planet is closest to the Sun?',
        answers: [
          { text: 'Earth', correct: false },
          { text: 'Mars', correct: false },
          { text: 'Venus', correct: true },
          { text: 'Jupiter', correct: false }
        ]
      },
      {
        question: 'What is the largest desert in the world?',
        answers: [
          { text: 'Sahara Desert', correct: true },
          { text: 'Arctic Desert', correct: false },
          { text: 'Gobi Desert', correct: false },
          { text: 'Atacama Desert', correct: false }
        ]
      },
      {
        question: 'What is the chemical symbol for gold?',
        answers: [
          { text: 'Au', correct: true },
          { text: 'Ag', correct: false },
          { text: 'Fe', correct: false },
          { text: 'Cu', correct: false }
        ]
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
          { text: 'China', correct: false },
          { text: 'Japan', correct: true },
          { text: 'South Korea', correct: false },
          { text: 'Thailand', correct: false }
        ]
      },
      {
        question: 'Who is the author of "Romeo and Juliet"?',
        answers: [
          { text: 'Charles Dickens', correct: false },
          { text: 'William Shakespeare', correct: true },
          { text: 'Jane Austen', correct: false },
          { text: 'F. Scott Fitzgerald', correct: false }
        ]
      },
      {
        question: 'What is the largest planet in our solar system?',
        answers: [
          { text: 'Venus', correct: false },
          { text: 'Mars', correct: false },
          { text: 'Jupiter', correct: true },
          { text: 'Saturn', correct: false }
        ]
      },
      {
        question: 'Which gas makes up the majority of Earth\'s atmosphere?',
        answers: [
          { text: 'Carbon Dioxide', correct: false },
          { text: 'Oxygen', correct: false },
          { text: 'Nitrogen', correct: true },
          { text: 'Hydrogen', correct: false }
        ]
      },
    {
        question: 'What is the largest mammal on Earth?',
        answers: [
          { text: 'Giraffe', correct: false },
          { text: 'African Elephant', correct: false },
          { text: 'Blue Whale', correct: true },
          { text: 'Hippopotamus', correct: false }
        ]
      },
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Paris', correct: true },
        { text: 'Berlin', correct: false },
        { text: 'Madrid', correct: false },
        { text: 'Rome', correct: false }
      ]
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Nitrogen', correct: false },
        { text: 'Hydrogen', correct: false }
      ]
    },
    // Additional questions...
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
        { text: 'Earth', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Venus', correct: false },
        { text: 'Jupiter', correct: false }
      ]
    },
   
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Leonardo da Vinci', correct: true },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Vincent van Gogh', correct: false },
        { text: 'Michelangelo', correct: false }
      ]
    },
    {
        question: 'Do you love Web Development?',
        answers: [
          { text: 'Yes, Of course', correct: true },
          { text: 'Neutral', correct: true },
          { text: 'No', correct: true },
          { text: "I'm Not Sure", correct: true }
        ]
      }
  ];
  