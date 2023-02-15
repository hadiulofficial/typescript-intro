const num1Input = document.getElementById('num1') as HTMLInputElement
const num2Input = document.getElementById('num2') as HTMLInputElement
const buttonEl = document.querySelector('button') as HTMLInputElement


function add(a: number, b: number){
    return a+b;
}

function printResult(result){
    console.log(result);
    
}

// const result  = add(5,8)

// printResult(result)

let results: {res: number, print: () => void}[] = []

buttonEl.addEventListener('click', ()=>{
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2)
    const resultContainer = {
        res: result,
        print () {
            console.log(this.res);
            
        }
    }
    results.push(resultContainer)
    printResult(results)
    results[0].print()
})
