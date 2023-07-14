
// reset table
let resetBtn = document.querySelector(".reset-btn");
let rows = document.querySelectorAll(".row");

resetBtn.addEventListener('click', () => {
    rows.forEach(row => {
        row.remove();
    })
})


