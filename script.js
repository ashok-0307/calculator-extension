document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-7').addEventListener('click', function() {
        appendToDisplay('7');
    });
    document.getElementById('btn-8').addEventListener('click', function() {
        appendToDisplay('8');
    });
    document.getElementById('btn-9').addEventListener('click', function() {
        appendToDisplay('9');
    });
    document.getElementById('btn-plus').addEventListener('click', function() {
        appendToDisplay('+');
    });
    document.getElementById('btn-equal').addEventListener('click', function() {
        calculate();
    });
});

function appendToDisplay(value) {
    console.log("hello");
    document.getElementById('display').value += value;
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
