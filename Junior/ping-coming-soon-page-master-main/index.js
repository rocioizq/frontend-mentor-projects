const email = document.querySelector("#email");
const errorMsg = document.querySelector("span.error");
const button = document.querySelector("button");

button.addEventListener("click", function(e) {
    e.preventDefault();

    if (email.value === "") {
        showError("Please provide a valid email address");
    } else {
        checkEmail();
    }
});

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = "block"; 
    email.classList.add("error-border"); 
}

function checkEmail() {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.value.match(pattern)) {
        showError("Please provide a valid email address");
    } else {
        errorMsg.style.display = "none"; 
        email.classList.remove("error-border"); 
    }
}
