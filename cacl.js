var numString = ""
var total = 0
var input = document.getElementById("input")

// KeyPress function
document.onkeydown = function calculate(event) {

    event = event || window.event

    switch (event.keyCode) {
        case 48: // 0
            numberPressed("0")
            break;
        case 49: // 1
            numberPressed("1")
            break;
        case 50: // 2
            numberPressed("2")
            break;
        case 51: // 3
            numberPressed("3")
            break;
        case 52: // 4
            numberPressed("4")
            break;
        case 53: // 5
            numberPressed("5")
            break;
        case 54: // 6
            numberPressed("6")
            break;
        case 55: // 7
            numberPressed("7")
            break;
        case 56: // 8
            numberPressed("8")
            break;
        case 57: // 9
            numberPressed("9")
            break;
        case 190: // .
            numberPressed(".")
            break;
        case 187: // plus
            currentOpe = "+"
            operator()
            break;
        case 189: // minus
            currentOpe = "-"
            operator()
            break;
        case 88: // multiply
            currentOpe = "x"
            operator()
            break;
        case 191: // divide
            currentOpe = "/"    
            operator()
            break;
        case 13: // equals
            currentOpe = "="
            operator()
            break;
        case 27: // esc
            prevOpe = ""
            currentOpe = ""
            numString = ""
            total = ""
            input.innerHTML = "0"
            break;
    }
}

var button = document.querySelector("#buttons")

button.addEventListener("click", buttonPressed, false)



// Button Press Function
function buttonPressed(e) {
    if (e.target !== e.currentTarget){
        var clickedItem = e.target.id
    }
    if (clickedItem == "ac" || clickedItem == "ce"){
        prevOpe = ""
        currentOpe = ""
        numString = ""
        total = ""
        input.innerHTML = "0"
    }
    if (clickedItem == "nine") numberPressed("9")
    if (clickedItem == "eight") numberPressed("8")
    if (clickedItem == "seven") numberPressed("7")
    if (clickedItem == "six") numberPressed("6")
    if (clickedItem == "five") numberPressed("5")
    if (clickedItem == "four") numberPressed("4")
    if (clickedItem == "three") numberPressed("3")
    if (clickedItem == "two") numberPressed("2")
    if (clickedItem == "one") numberPressed("1")
    if (clickedItem == "zero") numberPressed("0")
    if (clickedItem == "dot") numberPressed(".")
    if (clickedItem == "percent") {
        if (total != 0 && numString == "") {
            total /= 100
            input.innerHTML = total
        }else if (numString != ""){
            total = parseFloat(numString)
            total /= 100
            input.innerHTML = total
        }
        prevOpe = ""
        currentOpe = ""
    }
    if (clickedItem == "plus") {
        currentOpe = "+"    
        operator()
    }
    if (clickedItem == "minus") {
        currentOpe = "-"    
        operator()
    }
    if (clickedItem == "multiply") {
        currentOpe = "x"    
        operator()
    }
    if (clickedItem == "divide") {
        currentOpe = "/"    
        operator()
    }
    if (clickedItem == "equals") {
        currentOpe = "="
        operator()
    }
}

var prevOpe = ""
var currentOpe = ""

// Number Function
function numberPressed(num){
    if (numString == "" && num == "0"){
        return
    }else{
        if (numString == "") {
            prevOpe = currentOpe
            currentOpe = ""
        }
        numString = numString.concat(num)
        input.innerHTML = numString
    }
}

// Operator Function
function operator(){
    if (total == 0) {
        total = parseFloat(numString)
        numString = ""
        return
    }else if (total != 0 && numString != ""){
        if (prevOpe == "+") {
            total += parseFloat(numString)
            input.innerHTML = total
            numString = ""
            prevOpe = currentOpe
        }else if (prevOpe == "-") {
            total -= parseFloat(numString)
            input.innerHTML = total
            numString = ""
            prevOpe = currentOpe
        }else if (prevOpe == "x") {
            total *= parseFloat(numString)
            input.innerHTML = total
            numString = ""
            prevOpe = currentOpe
        }else if (prevOpe == "/") {
            total /= parseFloat(numString)
            input.innerHTML = total
            numString = ""
            prevOpe = currentOpe
        }

        if (currentOpe = "=") {
            prevOpe = ""
            currentOpe = ""
            numString = ""
        }
    }
}
