let billingAmount = document.getElementById('billamt');
let serviceQuality = document.getElementById('serviceQual');
let peopleAmount = document.getElementById('peopleamt');
let calculateBtn = document.getElementById('calculate');
let totalTip = document.getElementById('totalTip');
let tip = document.getElementById('tip');

calculateBtn.addEventListener('click', (event) => {
	event.preventDefault();

	// let billAmount = billingAmont.value;
	let totalAmountTip = billingAmount.value * serviceQuality.value;


	if (billingAmount === '' || serviceQuality.value === "0" || billingAmount === NaN) {
		alert('Please out form correctly!');
		billingAmount.value = '';
		serviceQuality.value = 0;
		peopleAmount.value = '';
		tip.innerHTML = "";

		// billingAmont.value === '';
		// return
	}
	// let numOfpep = peopleAmount.value;

	if(peopleAmount.value === ""){
		alert("Should not be less than 1 person");
	}else if(peopleAmount.value < 1){
		alert("Should not be less than 1 person");
	}



	/* if (billingAmount.value === '' || serviceQuality.value === 0 || billingAmount === NaN) {
		alert('Please fill out form correctly!');
		// billingAmont.value === '';
		return
		// console.log(numOfpep)
	// } 
	// if (isNaN(billingAmont.value)){
	// 	alert('Please fill out form correctly!');
	// 	return
	}
 */
	totalTip.style.display = 'block';
	tip.innerHTML = (totalAmountTip / peopleAmount.value).toFixed(2);

	billingAmount.value = '';
	serviceQuality.value = 0;
	peopleAmount.value = '';

	})
// console.log(numOfpep)