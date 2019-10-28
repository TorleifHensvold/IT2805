var tasks = [];

var checked = 0;

const inputField = document.getElementById('inputField');
const button = document.getElementById('addInput');
const output = document.getElementById('output');
const ul = document.getElementById('list');

inputField.focus();


function addTask ()
{
	if (inputField.value.length > 0)
	{
		tasks.unshift(inputField.value);
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(tasks[0]));
		ul.prepend(li);
		inputField.value = '';
		inputField.focus();
	}
	updateOutput();
}

function updateOutput ()
{
	output.innerText = 'Completed ' + checked + ' out of ' + tasks.length +
		' tasks!';
}

/**
 * Adds the task when the button is clicked.
 */
button.addEventListener('click', () =>
{
	addTask();
});

/**
 * Adds the possibility of using the "Enter" key to add the task to the list
 */
inputField.addEventListener('keyup', function (event)
{
	//console.log(event.key);
	if (event.key === "Enter")
	{
		addTask();
	}
});

/**
 * Toggles the class "checked" on the item the event targets, and updates the
 * necessary variables and html.
 */
ul.addEventListener('click', function (event)
{
	if (event.target.tagName === 'LI')
	{
		event.target.classList.toggle('checked');
		if (event.target.classList.contains('checked'))
		{
			checked++;
		}
		else
		{
			checked--;
		}
	}
	updateOutput();
});
