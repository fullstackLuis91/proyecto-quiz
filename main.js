const quizContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const answerButtonsElement = document.getElementById("answer-buttons");

let questions = [];
const getQuestions = async() => {
    const res = await axios.get(
        "https://opentdb.com/api.php?amount=10&difficulty=easy"
    );
    questions = res.data.results.map((questionObj) => {
        // guardamos las respuestas incorrectas en formato array de objetos
        let answers = questionObj.incorrect_answers.map((answer) => {
            return { text: answer, correct: false };
        });
        //añadimos al array anwers el objeto de la repsuesta correcta
        answers.push({ text: questionObj.correct_answer, correct: true });
        // //función que desordena
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); // nos da indice aleatorio
                // Intercambiar elementos
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        const unOrderedAnswers = shuffle(answers);
        //creamos un objeto que contiene la pregunta y el array de respuestas que hemos creado previamente
        const newQuestion = {
            question: questionObj.question,
            answers: unOrderedAnswers, // esto es lo mismos que: answers:answers
        };
        //devolvemos el objeto creado para que se guarde en questions
        return newQuestion;
    });
    console.log(questions);
};
getQuestions();

let currentQuestionIndex;



function startGame() {
  startButton.classList.add("hide");
  currentQuestionIndex = 0;
  quizContainer.classList.remove("hide");
}

startButton.addEventListener("click", startGame);


function showQuestion(question) {
    questionElement.innerText = question.question;
    }

function setNextQuestion() {
        showQuestion(questions[currentQuestionIndex]);
      }

function startGame() {
        startButton.classList.add("hide");
        currentQuestionIndex = 0;
        quizContainer.classList.remove("hide");
        setNextQuestion();
      }

function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach((answer) => {
          const button = document.createElement("button");
          button.innerText = answer.text;
      
          if (answer.correct) {
            button.dataset.correct = true;
          }
          button.addEventListener("click", selectAnswer);
          answerButtonsElement.appendChild(button);
        });
      }      

function selectAnswer() {
    
          answerButtonsElement.childNodes.forEach((button) => {
            setStatusClass(button);
          });
          if (questions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove("hide");
          } else {
            startButton.innerText = "Restart";
            startButton.classList.remove("hide");
          }
        }
        


function setStatusClass(element) {
        if (element.dataset.correct) {
          element.classList.add("correct");
        } else {
          element.classList.add("wrong");
        }
      }
  
    
         
nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        setNextQuestion();
      });

function resetState() {
        nextButton.classList.add("hide");
        answerButtonsElement.innerHTML=""
      }
      
function setNextQuestion() {
        resetState();
        showQuestion(questions[currentQuestionIndex]);
      }
            
      