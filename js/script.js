document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghindari pengiriman form

    // Ambil nilai dari input
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInMeters = parseFloat(document.getElementById("height").value) / 100;
    const gender = document.getElementById("gender").value;

    // Hitung BMI menggunakan rumus BMI
    const bmi = weight / (heightInMeters * heightInMeters); // Tinggi tetap dalam meter untuk perhitungan

    let resultText = `BMI Anda adalah: ${bmi.toFixed(2)}`;
    let explanationText = "";

    // Penjelasan berdasarkan nilai BMI
    if (bmi < 18.5) {
        explanationText = "Anda tergolong berat badan kurang.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        explanationText = "Anda tergolong berat badan normal. Panjang-panjang orang sehat.";
    } else if (bmi >= 25 && bmi < 29.9) {
        explanationText = "Anda tergolong berat badan berlebih.";
    } else {
        explanationText = "Anda tergolong obesitas. Rawan meninggal";
    }

    // Tampilkan hasil dan penjelasan dengan efek fade-in
    const resultElement = document.getElementById("result");
    const explanationElement = document.getElementById("explanation");
    resultElement.textContent = resultText;
    explanationElement.textContent = explanationText;
    
    resultElement.classList.add("show");
    explanationElement.classList.add("show");
});