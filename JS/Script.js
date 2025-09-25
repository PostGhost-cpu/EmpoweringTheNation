function myFunction() {
    let discount;

    // Get all checked checkboxes
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

    let price = 0;
    checkboxes.forEach(cb => {
        price += Number(cb.value); // Add up prices of all checked courses
    });

    // Apply discount
    const finalPrice = price * (1 - discount);
    const result = "R" + finalPrice;

    const outputElement = document.getElementById("result");
    outputElement.textContent = result;
}