const inputBox = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');

const cleanInputString = (str) => {
  const regex = /[a-z0-9]/;
  const lower = str.toLowerCase();
  let newArr = [];
  for (let i = 0; i < lower.length; i++) {
    if (regex.test(lower[i])) {
      newArr.push(lower[i]);
    }
  }
  return newArr;
};

const getStringFromInput = () => cleanInputString(inputBox.value);

const palindromeChecker = () => {
  const Arr = getStringFromInput();
  const inputStr = Arr.toString().replaceAll(',', '');
  const reverseStr = Arr.reverse().toString().replaceAll(',', '');
  if (inputStr.length === 0) {
    alert('Please input a value');
  } else if (inputStr === reverseStr) {
    resultText.innerText = `${inputBox.value} is a palindrome`;
  } else {
    resultText.innerText = `${inputBox.value} is not a palindrome`;
  }
};

checkButton.addEventListener("click", palindromeChecker);