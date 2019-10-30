const canvas = document.getElementById('chart');
const context = canvas.getContext('2d');

/* Draw a line from (fromX, fromY) to (toX, toY) */
function drawLine(fromX, fromY, toX, toY) {
    context.beginPath();
    context.moveTo(toX, toY);
    context.lineTo(fromX, fromY);
    context.stroke();
}

/* Draw a text (string) on (x, y) */
function drawText(text, x, y) {
    context.fillStyle = 'black';
    context.fillText(text, x, y);
}

/* Draw a text and with a line to its right */
function drawLineWithText(text, fromX, fromY, toX, toY) {
    drawText(text, fromX - 50, fromY + 10);
    drawLine(fromX, fromY, toX, toY);
}

/* Insert your code here. */
