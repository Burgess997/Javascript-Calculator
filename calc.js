let numberDisplay = document.querySelector("#number-display")
let numberButtons = document.querySelectorAll("button")

function InitButtons(){
    numberButtons.forEach(button => {
        button.addEventListener('click',() => {
            HandleInput(button.id)
        })
    });
}

function HandleInput(button){
    
}

