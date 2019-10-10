/* Part 2 */
console.log('PART 2')
/*
Using the "let" keyword to initialize local variable i to value of 1
While i is less than 21, but not including 20, do the commands in {},
and add one to i for each iteration.
*/
for (let i = 1; i < 21; i++)
{
	console.log(i)
}

/* Part 3 */
console.log('PART 3')

const numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20]

/*
	This function performs a check for if a value is divisible by a number,
	and returns the string if it is. If the value was not divisible by
	the number it returns an empty string.
 */

function eplekakeCheck (value, number, string)
{
	if (value % number === 0)
	{
		return string
	}
	else
	{
		return ''
	}
}

/*
	This function uses eplekakeCheck() to give modularity to the checks for
	eple or kake. It runs through the array, and for each iteration it starts
	a new empty string, which it populates with the strings for numbers
	if eplekakeCheck determines it fits, otherwise it populates it with
	the number itself. It then logs the string to the console.
 */

function eplekake (array)
{
	//console.log('starting eplekake')
	for (let i = 0; i < array.length; i++)
	{
		let output = ''
		output += eplekakeCheck(array[i], 3, 'eple')
		output += eplekakeCheck(array[i], 5, 'kake')
		if (output.length == 0)
		{
			output += array[i]
		}
		console.log(output)
	}
}

// This is the function call that actually starts the function eplekake().
eplekake(numbers)



/* Part 4 */

/* Part 5 */
function changeDisplay () {

}

function changeVisibility () {

}

function reset () {

}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
