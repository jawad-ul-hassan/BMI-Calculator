const weight = document.getElementById('weight');
const height = document.getElementById('height');
const container = document.querySelector('.container');
const bmi = document.getElementById('bmi');
const bmiResult = document.getElementById('bmi-result');

bmiCalc = () => {
  const BMI = weight.value / (height.value * height.value);
  const resultBMI = (BMI * 10000).toFixed(1);
  return resultBMI;
};

checkCategory = value => {
  if (isFinite(value)) {
    if (value < 18.5) {
      bmiResult.style.color = 'rgb(185, 158, 14)';
      return `Underweight`;
    } else if (value >= 18.5 && value < 24.9) {
      bmiResult.style.color = 'rgb(13, 132, 141)';
      return `Normal`;
    } else if (value >= 24.9 && value < 29.9) {
      bmiResult.style.color = 'rgb(167, 79, 20)';
      return `Overweight`;
    } else if (value >= 29.9) {
      bmiResult.style.color = 'rgb(197, 42, 42)';
      return `Obese`;
    }
  } else {
    bmiResult.style.color = '#000000';
    return ``;
  }
};

updateUI = () => {
  bmiCalc();
  if (isFinite(bmiCalc())) {
    bmi.innerText = bmiCalc();
  }
  bmiResult.innerText = checkCategory(bmiCalc());
};

container.addEventListener('input', updateUI);
