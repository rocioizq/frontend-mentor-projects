const main = document.querySelector(".stay");
const img = document.querySelector("img");
const thanksContainer = document.querySelector(".thanks");
const btnSubcribe = document.querySelector(".btn-subcribe");
const btnDismiss = document.querySelector(".btn-dismiss");
const email = document.querySelector("#email");

btnSubcribe.addEventListener("click", function() {
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById("error-message");
    
    if (!emailPattern.test(emailValue)) {
        errorMessage.classList.remove("hidden");
        email.classList.add("invalid");
    } else {
        errorMessage.classList.add("hidden");
        email.classList.remove("invalid");
        
        thanksContainer.classList.remove("hidden");
        main.classList.add("hidden");
        img.classList.add("hidden");
    }
});

btnDismiss.addEventListener("click", function() {
    thanksContainer.classList.add("hidden");
    main.classList.remove("hidden");
    img.classList.remove("hidden");
});

