
// dropdown
const optionMenu = document.querySelector(".select-menu"),
        selectBtn = document.querySelector(".select-btn"),
        options = document.querySelectorAll(".option"),
        other = document.querySelector(".other"),
        sBtn_text = document.querySelector(".sBtn-text"),
        emailEvent = document.getElementById("eMail"),
        entireBox = document.querySelector(".form-box"),
        content = document.querySelector(".content")


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
 




function getValue() {
    var fNameInput = document.getElementById("fNameInput").value;
    var lNameInput = document.getElementById("lNameInput").value;
    var emailInput = document.getElementById("emailInput").value;
    var subText = document.getElementById("sub-text").value;
    var msgText = document.getElementById("msg-text").value;
    console.log(fNameInput);
    console.log(lNameInput);
    console.log(emailInput);
    console.log(subText);
    console.log(msgText);
 
  }


