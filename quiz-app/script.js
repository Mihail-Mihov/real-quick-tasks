const quizData = [
    {
        question: 'Which is correct data type in js?',
        a: 'boolean',
        b: 'String',
        c: 'Null',
        d: 'all of them',
        correct: 'd',
    },
    {
        question: 'When Javascript was invented?',
        a: '1995',
        b: '1992',
        c: '1990',
        d: '2000',
        correct: 'a',
    },
    {
        question: 'Which one provide loading a new page withoud reload?',
        a: 'MongoDB',
        b: 'Ajax',
        c: 'JSON',
        d: 'API',
        correct: 'b',
    },
    {
        question: 'Which of the following is not a non-relational database ?',
        a: 'MySQL',
        b: 'Cassandra',
        c: 'MongoDB',
        d: 'Redis',
        correct: 'a',
    }
]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const btn = document.getElementsByTagName('button')[0];
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    let currentQuiz = quizData[currentQuestion];

    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((el) => {
        if (el.checked) {
            answer = el.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((el) => {
        el.checked = false;
    });
}

btn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer == quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`
        }
      
    }
})