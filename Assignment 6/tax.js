

function calculateTax ()
{
	// The redundant use of tax += is because of a code
	// analysis that didn't like having it as a oneliner...
	let tax = 0;
	tax += ((0.35 * getIncome()) + (0.25 * getWealth()));

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
