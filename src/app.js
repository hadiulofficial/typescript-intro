var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonEl = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printResult(result) {
    console.log(result);
}
// const result  = add(5,8)
// printResult(result)
var results = [];
buttonEl.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    printResult(results);
    results[0].print();
});
