function calculateSum() {
    // Get input values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Check if the input is valid
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    // Calculate the sum
    var sum = num1 + num2;

    // Display the result
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}
