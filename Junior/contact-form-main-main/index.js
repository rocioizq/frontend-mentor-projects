const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const queryType = document.querySelectorAll("input[name='query-type']");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
const errorMsg = document.querySelectorAll(".error");
const successMsg = document.querySelector(".success-msg");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var isValid = true;

    if (firstName.value === "") {
        showError(0, firstName);
        isValid = false;
    } else {
        hideError(0, firstName);
    }

    if (lastName.value === "") {
        showError(1, lastName);
        isValid = false;
    } else {
        hideError(1, lastName);
    }

    if (email.value === "") {
        showError(2, email);
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(2, email, 'Looks like this is not an email');
        isValid = false;
    } else {
        hideError(2, email);
    }

    var querySelected = false;
    for (var i = 0; i < queryType.length; i++) {
        if (queryType[i].checked) {
            querySelected = true;
            break;
        }
    }
    if (!querySelected) {
        showError(3);
        isValid = false;
    } else {
        hideError(3);
    }

    if (message.value === "") {
        showError(4, message);
        isValid = false;
    } else {
        hideError(4, message);
    }

    if (!consent.checked) {
        showError(5, consent);
        isValid = false;
    } else {
        hideError(5, consent);
    }

    if (isValid) {
        successMsg.classList.add('active');
        form.reset()
    }
});

function showError(index, element, customMessage) {
    errorMsg[index].style.display = 'block';
    if (customMessage) {
        errorMsg[index].textContent = customMessage;
    }
    if (element) {
        element.classList.add('error-border');
    }
}

function hideError(index, element) {
    errorMsg[index].style.display = 'none';
    if (element) {
        element.classList.remove('error-border');
    }
}

function validateEmail(email) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
}
