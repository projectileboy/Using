/**
 * HTML5 Javascript charting library
 */
function drawChartLine(ctxt, xData, yData) {
    ctxt.lineWidth = 1.5;
    ctxt.strokeStyle = "#332222";

    ctxt.moveTo(xData[0], yData[0]);
    for (var i = 1; i < xData.length && i < yData.length; i++) {
        ctxt.lineTo(xData[i], yData[i]);
    }

    ctxt.stroke();
    ctxt.beginPath();
}

function drawGrid(ctxt, xInterval, yInterval) {
    ctxt.lineWidth = 0.75;
    ctxt.strokeStyle = "#bbbbdd";

    for (var x = xInterval; x < ctxt.canvas.width; x += xInterval) {
        ctxt.moveTo(x, 0);
        ctxt.lineTo(x, ctxt.canvas.height);
    }

    for (var y = yInterval; y < ctxt.canvas.height; y += yInterval) {
        ctxt.moveTo(0, y);
        ctxt.lineTo(ctxt.canvas.width, y);
    }
    ctxt.stroke();
    ctxt.beginPath();
}
/**
 * Expects array of x-data as first argument, followed by one or more corresponding arrays of y-data
 */
function drawLineChart() {
    var canvas = document.getElementById("graph");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;

    drawGrid(ctx, 20, 20);

    for (var i = 1; i < arguments.length; i++) {
        drawChartLine(ctx, arguments[0], arguments[i]);
    }
}


var myColor = ["#ECD078","#D95B43","#C02942","#542437","#53777A"];
var myData = [10,30,20,60,40];

function getTotal() {
    var myTotal = 0;
    for (var j = 0; j < myData.length; j++) {
        myTotal += (typeof myData[j] == 'number') ? myData[j] : 0;
    }
    return myTotal;
}

function drawPieChart() {
    var lastend = 0;
    var myTotal = getTotal();

    var canvas = document.getElementById("graph");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < myData.length; i++) {
        ctx.fillStyle = myColor[i];
        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.arc(200, 150, 150, lastend, lastend +
                (Math.PI * 2 * (myData[i] / myTotal)), false);
        ctx.lineTo(200, 150);
        ctx.fill();
        lastend += Math.PI * 2 * (myData[i] / myTotal);
    }
}
