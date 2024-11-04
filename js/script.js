// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Function to display the result
function displayResult(bmi, gender) {
    let resultText = `BMI Anda adalah ${bmi.toFixed(2)} (${gender === 'male' ? 'Laki-Laki' : 'Wanita'})`;
    let explanationText = '';

    // Explanation based on BMI
    if (bmi < 18.5) {
        explanationText = 'Anda memiliki berat badan kurang.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        explanationText = 'Anda memiliki berat badan normal.';
    } else if (bmi >= 25 && bmi < 29.9) {
        explanationText = 'Anda memiliki berat badan berlebih.';
    } else {
        explanationText = 'Anda mengalami obesitas, rawan meninggal.';
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('explanation').innerText = explanationText;
}

// Event listener for the form submission
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    // Validate input
    if (weight <= 0 || height <= 0 || !gender) {
        alert('Mohon masukkan nilai yang valid!');
        return;
    }

    // Calculate BMI
    const bmi = calculateBMI(weight, height);
    
    // Display the result
    displayResult(bmi, gender);
});
