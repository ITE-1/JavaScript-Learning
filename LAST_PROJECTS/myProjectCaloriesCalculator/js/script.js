const form = document.querySelector('form'),
    weightField = document.getElementById('weight'),
    formBtn = document.querySelector('button'),
    carbohydrateField = document.getElementById('carbohydrate'),
    proteinField = document.getElementById('protein');

formBtn.addEventListener('click', (event) => {
    const weight = weightField.value;
    event.preventDefault();
    const {carbohydrate, protein} = calculate(weight);
    carbohydrateField.textContent = carbohydrate + ' гр';
    proteinField.textContent = protein + ' гр';
})

function calculate(weight) {
    const carbohydrate = weight * 5;
    const protein = weight * 1.5;
    return {
        'carbohydrate' : carbohydrate,
        'protein': protein
    };
}
