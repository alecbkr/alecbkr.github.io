let counter = 0;

function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

function runForLoop() {
    document.getElementById("forLoopResult").textContent = "";
    let i = 0;
    while (i <= counter) {
        document.getElementById("forLoopResult").textContent += i + " ";
        i++;
    }
}

function showOddNumbers() {
    document.getElementById("oddNumberResult").textContent = "";
    let i = 1;
    while (i <= counter) {
        document.getElementById("oddNumberResult").textContent += i + " ";
        i = i+2;
    }
}

function addMultiplesToArray() {
    let array = [];
    let i = counter - (counter % 5);
    while(i > 4) {
        array.push(i);
        i = i-5;
    }
    console.log(array);
}

function printCarObject() {
    let type  = document.getElementById("carType").value;
    let mpg   = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        type, mpg, color
    };
    console.log(car);
}

function loadCar(num) {
    let carObject = {};
    switch(num) {
        case 1: carObject = {cType: "sedan", cMPG: "32", cColor: "blue"}; break;
		case 2: carObject = {cType: "truck", cMPG: "28", cColor: "red"};  break;
		case 3: carObject = {cType: "van", cMPG: "30", cColor: "green"};  break;
    }

    document.getElementById("carType").value  = carObject.cType;
    document.getElementById("carMPG").value   = carObject.cMPG;
    document.getElementById("carColor").value = carObject.cColor;
}

function changeColor(num) {
    let color = {};
    switch(num) {
        case 1: color = {r: 255, g: 0, b: 0}; break;
        case 2: color = {r: 0, g: 255, b: 0}; break;
        case 3: color = {r: 0, g: 0, b: 255}; break;
    }
    document.getElementById("styleParagraph").style.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
}