const correctAnswers = {
    q1: '5', 
    q2: '4'   
};

function checkAnswers() {
    const questionnaireForm = document.getElementById('questionnaireForm');
    const correction = document.getElementById('correction');
    
    let correctionText = '<h2>Corriger:</h2>';

    for (const question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[question]) {
                correctionText += `<p class="correct">Bonne réponse: ${selectedAnswer.value}</p>`;
            } else {
                correctionText += `<p class="incorrect">Faux réponse: ${selectedAnswer.value}</p> <p class="correct">Bonne réponse: ${correctAnswers[question]}</p>`;
            }
        } else {
            correctionText += `<p class="incorrect">Vous n'avez pas répondu à la question ${question.replace('q', '')}</p>`;
        }
         const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');

    if (selectedAnswers.length === 0) {
        alert('Veuillez sélectionner les réponses à toutes les questions avant de cliquer sur le bouton "Corriger".');
        return; // 
    }




    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.disabled = true;
    });

   
    const correctionButton = document.querySelector('input[value="Сorriger"]');
    correctionButton.disabled = true;

  
    const resultButton = document.querySelector('input[value="resultat"]');
    resultButton.disabled = false;
    }

    correction.innerHTML = correctionText;

    const resultButton = document.querySelector('input[value="resultat"]');
    resultButton.disabled = false;
}

function showResult() {
    const questionnaireForm = document.getElementById('questionnaireForm');
    const correction = document.getElementById('correction');
    const result = document.getElementById('result');
    
    let score = 0;

    for (const question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    result.innerHTML = `<h2>resultat:</h2><p>Vous avez récolté  ${score} sur ${Object.keys(correctAnswers).length} points.</p>`;
const resultButton = document.querySelector('input[value="resultat"]');
    resultButton.disabled = true;
}



