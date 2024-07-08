// Questions and answers stored in a object
const quizData = {
    q1: 'a',
    q2: 'b',
};
// function to evaluate answers and calculate score
function submitQuiz() {
    let score = 0;

    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q1"]:checked')?.value,
    };
    for (let question in quizData) {
        if (quizData.hasOwnProperty(question)) {
            if (quizData[question] === userAnswers[question]) {
                score ++;
            }
        }
    }
    document.getElementById('score').innerText = 'score: ' + score;
}