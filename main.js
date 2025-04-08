function calculateBMI() {
	let weightValue = document.getElementById('inputWeight').value;
	let heightValue = document.getElementById('inputHeight').value;
	let displayOutput = document.getElementById('outputArea');

	let bmiResult = weightValue / Math.pow(heightValue, 2);
	let roundedResult = Math.round(bmiResult);

	if (bmiResult < 18.5) {
		displayOutput.innerHTML = 'You are underweight. ' + '(' + roundedResult.toFixed(2) + ").";
	} else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
		displayOutput.innerHTML = 'You are normal weight. ' + '(' + roundedResult.toFixed(2) + ").";
	} else if (bmiResult >= 25 && bmiResult <= 29.9) {
		displayOutput.innerHTML = 'You are overweight. ' + '(' + roundedResult.toFixed(2) + ").";
	} else if (bmiResult >= 30) {
		displayOutput.innerHTML = 'You are obese. ' + '(' + roundedResult.toFixed(2) + ").";
	} else {
		displayOutput.innerHTML = "No valid input.";
	}
}
