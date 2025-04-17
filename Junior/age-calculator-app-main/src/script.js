const resultYear = document.querySelector(".result-year");
const resultMonth = document.querySelector(".result-month");
const resultDay = document.querySelector(".result-day");
const submitBtn = document.querySelector(".btn-submit");
const errorMsg = document.querySelectorAll(".error")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    
    let valid = true;
    const daysInAMonth = new Date(yearInput, monthInput, 0).getDate();

    if (!dayInput || !monthInput || !yearInput) {
        showErrorMessage(0, "This field is required");
        showErrorMessage(1, "This field is required");
        showErrorMessage(2, "This field is required");
        valid = false;
    } else if (dayInput < 1 || dayInput > daysInAMonth || monthInput < 1 || monthInput > 12) {
        showErrorMessage(0, "Must be a valid date");
        showErrorMessage(1, "Must be a valid date");
        showErrorMessage(2, "Must be a valid date");
        valid = false;
    }
    
    if (!valid) {
        cleanResults();
        return;
    }
    
    let birthDate = new Date(yearInput, monthInput - 1, dayInput);
    let today = new Date();

    if (birthDate > today) {
        showErrorMessage(0, "Must be in the past");
        showErrorMessage(1, "Must be in the past");
        showErrorMessage(2, "Must be in the past");
        cleanResults();
        return;
    } else {
        hideErrorMessage(0);
        hideErrorMessage(1);
        hideErrorMessage(2);
    }

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    
    let years = currentYear - birthDate.getFullYear();
    let months = currentMonth - (birthDate.getMonth() + 1);
    let days = currentDay - birthDate.getDate();
  
    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        const lastMonth = new Date(currentYear, currentMonth - 1, 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        months = 11;
        years--;
    }
    
    resultYear.textContent = years;
    resultMonth.textContent = months;
    resultDay.textContent = days;
});

function showErrorMessage(index, message) {
    errorMsg[index].textContent = message;
    errorMsg[index].style.display = "block";

    const input = document.querySelectorAll(".user-data input")[index];
    const label = document.querySelectorAll(".user-data label")[index];

    input.classList.add("error-border");
    label.classList.add("error-text");

}

function hideErrorMessage(index) {
    errorMsg[index].style.display = "none";

    const input = document.querySelectorAll(".user-data input")[index];
    const label = document.querySelectorAll(".user-data label")[index];
    
    input.classList.remove("error-border");
    label.classList.remove("error-text");
}

function cleanResults() {
    resultYear.textContent = "- -";
    resultMonth.textContent = "- -";
    resultDay.textContent = "- -";
}
