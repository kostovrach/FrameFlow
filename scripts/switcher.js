document.addEventListener("DOMContentLoaded", function () {
    const switchMonth = document.querySelector(".plan__titlebox-switch_mounth");
    const switchYear = document.querySelector(".plan__titlebox-switch_year");
    const cardsMonth = document.querySelector(".plan__cards_mounth");
    const cardsYear = document.querySelector(".plan__cards_year");

    function showMonthlyPlans() {
        cardsMonth.style.display = "grid";
        cardsYear.style.display = "none";
        switchMonth.classList.add("_active");
        switchYear.classList.remove("_active");
    }

    function showYearlyPlans() {
        cardsMonth.style.display = "none";
        cardsYear.style.display = "grid";
        switchYear.classList.add("_active");
        switchMonth.classList.remove("_active");
    }

    switchMonth.addEventListener("click", showMonthlyPlans);
    switchYear.addEventListener("click", showYearlyPlans);

    showMonthlyPlans();
});
