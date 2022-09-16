var elFirstInput = document.querySelector('#word1');
var elSecondInput = document.querySelector('#word2');
var elCheckButton = document.querySelector('#check');
var elResult = document.querySelector('.result');

elCheckButton.addEventListener('click', function(){
	var firstWord = elFirstInput.value;
	var secondWord = elSecondInput.value;

	elFirstInput.value = '';
	elSecondInput.value = '';

	if(firstWord.trim() === '' || secondWord.trim() === ''){
		alert("Ikkita so'zni ham kiriting!");
	} else if(firstWord === secondWord.split('').reverse().join('')){
		elResult.textContent = "So'zlar teskari!";
		elResult.classList.remove('false');
		elResult.classList.add('true');
	} else {
		elResult.textContent = "So'zlar teskari emas!";
		elResult.classList.remove('true');
		elResult.classList.add('false');
	}
});