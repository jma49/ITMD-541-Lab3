document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("tipForm");

	form.addEventListener("input", () => {
		const billTotalO = document.getElementById("billTotal").value;
		const tipPercentage = Number(document.getElementById("tip").value);
		if (!isNumeric(billTotalO)) {
			alert("Please enter a valid number for Bill Total.");
			clear();
			return;
		}
		const billTotal = Number(billTotalO);
		const tipAmount = (billTotal * tipPercentage) / 100;
		const totalBill = billTotal + tipAmount;

		document.getElementById("tipPercentage").value = `${tipPercentage}%`;
		document.getElementById("tipAmount").value = tipAmount.toFixed(2);
		document.getElementById("totalBill").value = totalBill.toFixed(2);
	});

	function clear() {
		['tipPercentage', 'tipAmount', 'totalBill', 'billTotal'].forEach(id => {
			document.getElementById(id).value = '';
		});
	}

	function isNumeric(value) {
		return !isNaN(Number(value)) && isFinite(value);
	}
});
