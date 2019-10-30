const canvas = document.getElementById('chart');
const context = canvas.getContext('2d');
const lineDifference = 100000;
const labels = {"income":{"name":"income",
    "colour":"red"},
"wealth":{"name":"wealth",
"colour":"blue"}};
const SPACE_ON_RIGHT_SIDE = 50;

/* Draw a line from (fromX, fromY) to (toX, toY) */
/**
 * Draw a line
 * @param fromX the x-coordinate of the start point
 * @param fromY the y-coordinate of the start point
 * @param toX the x-coordinate of the end point
 * @param toY the y-coordinate of the end point
 */
function drawLine(fromX, fromY, toX, toY) {
    context.beginPath();
    context.moveTo(toX, toY);
    context.lineTo(fromX, fromY);
    context.stroke();
}


/* Draw a text (string) on (x, y) */
/**
 *
 * @param text the text that is written to the left of the line
 * @param x the x-coordinate the text should start at
 * @param y the y-coordinate the text should start at
 */
function drawText(text, x, y) {
    context.fillStyle = 'black';
    context.fillText(text, x, y);
}

/* Draw a text and with a line to its right */
/**
 *
 * @param text the text that is written to the left of the line
 * @param fromX the x-coordinate of the start point
 * @param fromY the y-coordinate of the start point
 * @param toX the x-coordinate of the end point
 * @param toY the y-coordinate of the end point
 */
function drawLineWithText(text, fromX, fromY, toX, toY) {
    drawText(text, fromX - 50, fromY + 10);
    drawLine(fromX, fromY, toX, toY);
}

/* Insert your code here. */

/**
 * Draws a chart background with ten lines to the full height of the canvas
 * @param height
 * @param width
 */
function drawBarChartBackground(height, width) {
    let i = 1;
    let numberOfLines = 10;
    for (i; i <= numberOfLines; i++) {
        let canvasDeltaY = (height / (numberOfLines + 2));
        let yHeight = (height - ((i + 1) * canvasDeltaY));
        if (i == 1) {
            drawLine(0, (height - canvasDeltaY), width, (height - canvasDeltaY));
        }
        console.log(i);
        drawLineWithText((i * lineDifference), 50, yHeight, (width - SPACE_ON_RIGHT_SIDE), yHeight)
    }
}

/**
 * Draws a rectangle from the given x and y, and to the right and up on the screen, i.e. in x+ and y-
 * @param fromX the x-coordinate of the start point
 * @param fromY the y-coordinate of the start point
 * @param width the width of the rectangle to be drawn
 * @param height the height of the rectangle to be drawn
 * @param colour the colour of the rectangle to be drawn
 */
function drawRectangle(fromX, fromY, width, height, colour) {
    context.fillStyle = colour;
    context.fillRect(fromX, fromY, width, height)
}

/**
 * Helper function to choose what to do on different pages
 */
function labelsAndBars(height, width)
{
    if (page === "labels")
    {
        addLabels(height, width);
    }
    else if (page === "bars")
    {

    }
}

/**
 * Helper function to add
 * @param name the name of the label
 * @param colour the colour of the label
 * @param fromX the start x of the label
 * @param fromY the start y of the label
 * @param toX the end x of the label
 * @param toY the end y of the label
 */
function addLabel(name, colour, fromX, fromY, toX, toY)
{
    drawText(name, fromX, fromY);
    drawRectangle(fromX, (fromY + ((toY - fromY)/6)) , (toX - fromX), ((toY - fromY)/2), colour);
}

function addLabels(height, width)
{
    let i = 0;
    let labelHeight = height/10;
    let labelStartHeight = labelHeight;
    for (let key in labels)
    {
        let labelStartY = (labelStartHeight + (i * labelHeight));
        let item = labels[key];
        addLabel(item["name"], item["colour"], ((width - SPACE_ON_RIGHT_SIDE) + (SPACE_ON_RIGHT_SIDE / 20)), labelStartY, width, (labelStartY + labelHeight));
        i++;
    }
}

function addBarsForPerson(person, fromX, fromY, toX, toY)
{
    let bar1Start = fromX + 2;
    let middlePointX = ((fromX + toX) / 2);
    let bar1End = middlePointX - 2;
    let bar2start = middlePointX + 2;
    let bar2End = toX - 2;
    drawText(person["name"], fromX, (fromY + 10));
    drawRectangle(bar1Start, fromY, (bar1End - bar1Start), toY, )
    // TODO change the whole damn thing to know where the bars can start, and how tall each line is
}

let canvasHeight = document.getElementById("chart").height;
let canvasWidth = document.getElementById("chart").width;
drawBarChartBackground(canvasHeight, canvasWidth);
labelsAndBars(canvasHeight, canvasWidth);