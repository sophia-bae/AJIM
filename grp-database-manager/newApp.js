let resetBtn = document.querySelector(".reset-btn");
let inputs = document.querySelectorAll('.inputLine');

resetBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.clear();
    })
})
