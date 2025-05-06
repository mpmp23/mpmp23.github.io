function some_method(a1, b1, c1){
    //My method is summing any three numbers that you want! :D
    summarization = a1 / b1 * Math.pow(c1, 2);
    return summarization;
}

//Function to handle user input and display the result
function calculateAndDisplayResult() {
    var a1 = parseFloat(document.getElementById("inputA").value);
    var b1 = parseFloat(document.getElementById("inputB").value);
    var c1 = parseFloat(document.getElementById("inputC").value);

    if (isNaN(a1) || isNaN(b1) || isNaN(c1)) {
        alert("Please enter valid numbers!");
        return;
    }

    var result = some_method(a1, b1, c1);
    document.getElementById("result").textContent = "Muahaha -- your result hath been calculated: " + result;
    //alert("Muahaha -- your result hath been calculated: " + result);
}