function addition(num1, num2){
    if (num1 == null || num2 == null){return 0;}
    if (Number.isInteger(num1) == false || Number.isInteger(num2) == false){
        return "Error";
    }
    return num1 + num2;
}

module.exports = addition;