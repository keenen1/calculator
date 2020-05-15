
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

// Button Press Function

// var button = document.getElementsByClassName("buttons")
// var press = buttonPressed();

// button[press].addEventListener(
//     'click', 
//     function() {
//         switch (press){

//         }
// })

// function buttonPressed() {
//     for (var i=0; i < button.length; i++){
//         if (button[i].innerHTML == "AC") return 0
//         if (button[i].innerHTML == "CE") return 1
//         if (button[i].innerHTML == "%") return 2
//         if (button[i].innerHTML == "÷") return 3
//         if (button[i].innerHTML == "7") return 4
//         if (button[i].innerHTML == "8") return 5
//         if (button[i].innerHTML == "9") return 6
//         if (button[i].innerHTML == "x") return 7
//         if (button[i].innerHTML == "4") return 8
//         if (button[i].innerHTML == "5") return 9
//         if (button[i].innerHTML == "6") return 10
//         if (button[i].innerHTML == "-") return 11
//         if (button[i].innerHTML == "1") return 12
//         if (button[i].innerHTML == "2") return 13
//         if (button[i].innerHTML == "3") return 14
//         if (button[i].innerHTML == "+") return 15
//         if (button[i].innerHTML == "0") return 16
//         if (button[i].innerHTML == ".") return 17
//         if (button[i].innerHTML == "=") return 18
//     }

// }


var prevOpe = ""
var currentOpe = ""

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

        // if (currentOpe = "%") {
        //     total /= 100
        // }

        if (currentOpe = "=") {
            prevOpe = ""
            currentOpe = ""
            numString = ""
        }
    }
}
