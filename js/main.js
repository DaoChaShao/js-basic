function main() {
    let isString;
    isString = "Hello, World!";
    document.write(`${isString}'s type is ${typeof isString}`, "<br>");
    document.write(`${isString}'s length is ${isString.length}`, "<br>")
    document.write(isString.toString().toUpperCase(), "<br>")
    document.write(isString.toString().toLowerCase(), "<br>")
    document.write(isString.charAt(1), "<br>")
    document.write(isString.substring(2, 4), "<br>")
    document.write(isString.replace("Hello", "Hi"), "<br>")
    document.write(isString.indexOf("World").toString(), "<br>")

    const isInt = 10;
    document.write(`${isInt}'s type is ${typeof isInt}`, "<br>");

    const isFloat = 3.14;
    document.write(`${isFloat}'s type is ${typeof isFloat}`, "<br>");

    const isBool = true;
    document.write(`${isBool}'s type is ${typeof isBool}`, "<br>");

    const isUndefined = undefined;
    document.write(`${isUndefined}'s type is ${typeof isUndefined}`, "<br>");

    const isNull = null;
    document.write(`${isNull}'s type is ${isNull}`, "<br>");

    const food = ["Pizza", "Sushi", "Burger", "Pasta", "Tacos"];
    document.write(`${food}'s type is ${typeof food}`, "<br>");
    document.write(food.length.toString(), "<br>");
    document.write(`${food[0]}'s type is ${typeof food[0]}`, "<br>");

    food.push("Steak");
    document.write(food.join(" - "), "<br>")
    document.write(food[0], "<br>")
    food[0] = "Salad";
    document.write(food.join(" * "), "<br>")
    document.write(food.length.toString(), "<br>")
    for (let j = 0; j < food.length; j++) {
        document.write(food[j], " | ")
    }
    document.write(food.slice(2, 4).join("<br>"), "<br>")
    food.unshift("Rice", "Beans");
    document.write(food.join(" - "), "<br>")
    food.shift()
    document.write(food.join(" * "), "<br>")
    food.pop()
    document.write(food.join(" + "), "<br>")
    food.splice(0, 3)
    document.write(food.join(" / "), "<br>")
    food.reverse()
    document.write(food.join(" & "), "<br>")

    const PI = Math.PI;
    document.write(`${PI}'s type is ${typeof PI}`, "<br>");

    const r = 2;
    const area = Math.pow(r, 2) * PI;
    document.write(`${area.toFixed(2)}'s type is ${typeof r}`, "<br>");

    const year = Math.floor(Math.random() * 2025);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        document.write(`The year of ${year} is Leap Year.`, "<br>");
    } else {
        document.write(`The year of ${year} is Ordinary Year.`, "<br>");
    }

    const score = Math.floor(Math.random() * 101);
    if (score >= 85) {
        document.write(`The ${score} is A.`, "<br>");
    } else if (score >= 70) {
        document.write(`The ${score} is B`, "<br>");
    } else if (score >= 60) {
        document.write(`The ${score} is C`, "<br>");
    } else {
        document.write(`The ${score} is F`, "<br>");
    }

    const gender = Math.random() < 0.5 ? 0 : 1;
    switch (gender) {
        case 0:
            document.write("Female", "<br>")
            break;
        case 1:
            document.write("Male", "<br>")
            break;
        default:
            document.write("Unknown", "<br>")
            break;
    }

    const time = Math.floor(Math.random() * 24);
    time < 10 ? document.write("0" + time.toString(), "<br>") : document.write(time.toString(), "<br>");

    let round = 0;
    let sum = 0;
    while (round <= 100) {
        sum += round;
        round++;
    }
    document.write(sum.toString(), "<br>");

    round = 0;
    sum = 0;
    do {
        sum += round;
        round++;
    } while (round <= 100)
    document.write(sum.toString(), "<br>")

    sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    document.write(sum.toString(), "<br>")
}

main()