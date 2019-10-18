

function calculateTax ()
{
	let tax = ((0.35 * getIncome()) + (0.25 * getWealth()));
	document.getElementById('tax').value = tax;
}

function getIncome ()
{
	return document.getElementById('income').value
}

function getWealth ()
{
	return document.getElementById('wealth').value
}
