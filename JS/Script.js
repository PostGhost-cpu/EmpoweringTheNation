function myFunction() {
    const six_months = 1500;
    const six_weeks = 750;
    let discount;

    //count how many checkboxes are checked
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedCount = checkboxes.length;

    if (checkedCount === 2) {
        discount = 0.05;
    } else if (checkedCount === 3) {
        discount = 0.10;
    } else if (checkedCount >= 4) {
        discount = 0.15;
    } else {
        discount = 0;
    }

    //use six_months if any checkbox with value "six_months" is checked, else six_weeks
    let price = six_weeks;
    checkboxes.forEach(cb => {
        if (cb.value === "six_months") {
            price = six_months;
        }
    });

    //Apply discount
    const finalPrice = price * (1 - discount);
    const result = "R" + finalPrice;

    const outputElement = document.getElementById("result").innerHTML;
    //Use textContent for non-input elements
    outputElement.textContent = result;
}