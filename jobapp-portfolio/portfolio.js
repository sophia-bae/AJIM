const optionMenu = document.querySelector(".select-menu"),
        selectBtn = document.querySelector(".select-btn"),
        options = document.querySelectorAll(".option"),
        other = document.querySelector(".other"),
        sBtn_text = document.querySelector(".sBtn-text"),
        emailEvent = document.getElementById("eMail"),
        entireBox = document.querySelector(".form-box")


        selectBtn.addEventListener("click", () => {
            optionMenu.classList.toggle("active");
            emailEvent.classList.toggle("active");
        });
        


    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            
            optionMenu.classList.remove("active");
            optionMenu.classList.remove("active");
        })
        
    
    });

   
    other.addEventListener("click", () => {
            let selectedOther = other.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOther;
            
            optionMenu.classList.remove("active");
    })