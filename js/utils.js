function additionOld(a, b) {
    return a + b;
}

const additionNew = (a, b) => a + b;

addition(1, 2)

function onClick() {
    alert("Hello, World!");
}

document.write(s.length.toString(), "<br>")

document.write(b.toString().toUpperCase(), "<br>")
document.write(b.toString().toLowerCase(), "<br>")

document.write(s.charAt(1), "<br>")

document.write(s.substring(2, 4), "<br>")

document.write(s.replace("Hello", "Hi"), "<br>")

let arr = s.split(" ");
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i], "<br>")
}

document.write(s.indexOf("World").toString(), "<br>")

let food = ["Pizza", "Sushi", "Burger", "Pasta", "Tacos"];
food.push("Steak");
document.write(food.join("<br>"), "<br>")
document.write(food[0], "<br>")
food[0] = "Salad";
document.write(food.join("<br>"), "<br>")
document.write(food.length.toString(), "<br>")
for (let j = 0; j < food.length; j++) {
    document.write(food[j], "<br>")
}
document.write(food.slice(2, 4).join("<br>"), "<br>")
food.unshift("Rice", "Beans");
document.write(food.join("<br>"), "<br>")
food.shift()
document.write(food.join("<br>"), "<br>")
food.pop()
document.write(food.join("<br>"), "<br>")
food.reverse()
document.write(food.join("<br>"), "<br>")
document.write(food.join("-"), "<br>")

let date = new Date();
let day = date.getDate();
let week = date.getDay()
let month = date.getMonth() + 1
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
document.write(
    year.toString() + " " + month.toString() + " " + day.toString() + " " +
    hour.toString() + ":" + minute.toString() + ":" + second.toString(),
    "<br>"
)
switch (week) {
    case 0:
        document.write("Sunday", "<br>");
        break;
    case 1:
        document.write("Monday", "<br>");
        break;
    case 2:
        document.write("Tuesday", "<br>");
        break;
    case 3:
        document.write("Wednesday", "<br>");
        break;
    case 4:
        document.write("Thursday", "<br>");
        break;
    case 5:
        document.write("Friday", "<br>");
        break;
    case 6:
        document.write("Saturday", "<br>");
        break;
    default:
        break;
}

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write(weekdays[week], "<br>")

document.write(Math.PI.toString(), "<br>")

const nums = [18, 25, 17, 61, 33]
let max = Math.max(...nums)
document.write(max.toString(), "<br>")
let min = Math.min(...nums)
document.write(min.toString(), "<br>")

document.write(Math.floor(Math.PI).toString(), "<br>")
document.write(Math.ceil(Math.PI).toString(), "<br>")
document.write(Math.round(Math.PI).toString(), "<br>")

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomOption(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const oDiv = document.getElementById("main");
const oStrong = document.createElement("strong");
const oText = document.createTextNode("Hello, World!");
oStrong.appendChild(oText);
oDiv.appendChild(oStrong);

function inserter() {
    const oList = document.getElementById("list")
    const oText = document.getElementById("txt")

    const textNode = document.createTextNode(oText.value)

    const oItem = document.createElement("li")
    oItem.appendChild(textNode)
    // oList.appendChild(oItem)
    oList.insertBefore(oItem, oList.firstElementChild)
}

function removeFirst() {
    const oList = document.getElementById("list")
    // remove the first item
    oList.removeChild(oList.firstElementChild)
}

function removeLast() {
    const oList = document.getElementById("list")
    // remove the last item
    oList.removeChild(oList.lastElementChild)
}

function copy() {
    const oLists = document.getElementById("lists")
    const oList = document.getElementById("list")
    // copy the list
    // deep copy
    oLists.appendChild(oList.cloneNode(true))
}

const oDivButton = document.getElementById("button4list")

const oInsert = document.createElement("input");
oInsert.type = "button";
oInsert.value = "Insert";
oInsert.onclick = inserter;
oDivButton.appendChild(oInsert);

const oRemoveFirst = document.createElement("input");
oRemoveFirst.type = "button";
oRemoveFirst.value = "Remove First";
oRemoveFirst.onclick = removeFirst;
oDivButton.appendChild(oRemoveFirst);

const oRemoveLast = document.createElement("input");
oRemoveLast.type = "button";
oRemoveLast.value = "Remove Last";
oRemoveLast.onclick = removeLast;
oDivButton.appendChild(oRemoveLast);

const oCopy = document.createElement("input");
oCopy.type = "button";
oCopy.value = "Copy";
oCopy.onclick = copy;
oDivButton.appendChild(oCopy);

function replace() {
    const oLabel = document.getElementById("replace-label")
    const oInput = document.getElementById("replace-input")

    oLabel.textContent = oInput.value
    oInput.value = ""
}

const oReplaceButtons = document.getElementById("button4replace")
const oReplace = document.createElement("input");
oReplace.type = "button";
oReplace.value = "Replace";
oReplace.onclick = replace;
oReplaceButtons.appendChild(oReplace);

const oLength = document.createElement("span");
oLength.id = "input-length";
oLength.textContent = "0";
oReplaceButtons.appendChild(oLength);

const oInput = document.getElementById("replace-input")

function calLength() {
    oLength.textContent = oInput.value.length.toString()
}

oInput.onkeyup = calLength;

//
const oColourBox = document.getElementById("colour-box")

function change() {
    // oColourBox.style.backgroundColor = "#174689"
    oColourBox.style.cssText = "background-color: #174689; width: 200px; height: 50px;"
    alert(getComputedStyle(oColourBox).backgroundColor)
}

function moveIn() {
    oColourBox.style.backgroundColor = "#174689"
}

function moveOut() {
    oColourBox.style.backgroundColor = "#f00"
}

oColourBox.onmouseover = moveIn;
oColourBox.onmouseout = moveOut;

const oColour = document.getElementById("button4colour")
const oChange = document.createElement("input");
oChange.type = "button";
oChange.value = "Change";
oChange.id = "changeButton";
oChange.onclick = change;
oColour.appendChild(oChange);

//
const oEvent = document.getElementById("event");
const oEveLabel = document.createElement("label");
oEveLabel.textContent = "You pressed the key: ";
oEvent.appendChild(oEveLabel);

const oEveSpan = document.createElement("span");
oEveSpan.id = "key-result";
oEveSpan.innerText = "None";
oEvent.appendChild(oEveSpan);

function press(e) {
    if (e.keyCode === 38 || e.keyCode === 87) {
        oEveSpan.innerText = "Up";
    } else if (e.keyCode === 39 || e.keyCode === 68) {
        oEveSpan.innerText = "Right";
    } else if (e.keyCode === 40 || e.keyCode === 83) {
        oEveSpan.innerText = "Down";
    } else if (e.keyCode === 37 || e.keyCode === 65) {
        oEveSpan.innerText = "Left";
    } else {
        oEveSpan.innerText = `KeyCode: ${e.keyCode}`;
    }
}

window.addEventListener("keydown", press, false);

document.write(window.navigator.userAgent)