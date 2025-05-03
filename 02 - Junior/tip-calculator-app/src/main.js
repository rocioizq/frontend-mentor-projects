const btnTips = document.querySelectorAll(".tip");
const customInput = document.getElementById("custom");
const tipAmountOutput = document.querySelector(".result-amount");
const totalOutput = document.querySelector(".result-total");
const btnReset = document.querySelector(".reset");
const errorMsg = document.querySelector(".error-msg");
let selectedPercentage = 0;

btnTips.forEach(button => {
    button.addEventListener("click", (e) => {
        selectedPercentage = parseFloat(e.target.dataset.tip);
        updateBillCalculation();
    });
});

customInput.addEventListener("input", () => {
    const customValue = parseFloat(customInput.value);
    if (isNaN(customValue) || customInput.value === "") {
        selectedPercentage = 0;
        btnTips.forEach(btn => btn.classList.remove("active"));
    } else {
        selectedPercentage = customValue / 100;
    }   
    updateBillCalculation();
});

function updateBillCalculation() {
    const billInput = parseFloat(document.getElementById("bill").value);
    const peopleInput = parseFloat(document.getElementById("people").value);

    if (isNaN(billInput) || billInput <= 0 || isNaN(peopleInput) || peopleInput <= 0) {
        tipAmountOutput.textContent = "$0.00";
        totalOutput.textContent = "$0.00";
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        const tipAmount = (billInput * selectedPercentage) / peopleInput;
        const total = (billInput + billInput * selectedPercentage) / peopleInput;

        tipAmountOutput.textContent = `$${tipAmount.toFixed(2)}`;
        totalOutput.textContent = `$${total.toFixed(2)}`;
    }    
}

btnReset.addEventListener("click", () => {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    customInput.value = "";
    selectedPercentage = 0;
    totalOutput.textContent = "$0.00";
    tipAmountOutput.textContent = "$0.00";
});