const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks");
const submit = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", function() {
    thanksContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
});

rates.forEach(function(rate) {
    rate.addEventListener("click", function() {
        rating.innerHTML = rate.innerHTML;
    });
});


