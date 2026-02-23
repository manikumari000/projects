

let totalIncome = 0;
let totalExpense = 0;

// selecting elements
const dateInput = document.getElementById("date-input");
const amountInput = document.getElementById("amount-input");
const typeInput = document.getElementById("type-input");
const addBtn = document.getElementById("add-btn");

const incomeDisplay = document.getElementById("total-income");
const expenseDisplay = document.getElementById("total-expense");
const balanceDisplay = document.getElementById("balance");

const table = document.querySelector(".transaction-table");

// add button event
addBtn.addEventListener("click", function () {

    const date = dateInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (date === "" || isNaN(amount) || type === "Transaction type") {
        alert("Please fill all fields");
        return;
    }

    // Update totals
    if (type === "income") {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    const balance = totalIncome - totalExpense;

    // Update UI
    incomeDisplay.textContent = totalIncome;
    expenseDisplay.textContent = totalExpense;
    balanceDisplay.textContent = balance;

    // Create new row
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${amount}</td>
        <td>${type}</td>
        <td>${date}</td>
        <td>
            <button class="btn delete-btn"> <span class="material-symbols-outlined" id="delete">
delete
</span></button>
        </td>
    `;

    table.appendChild(newRow);

    // Delete functionality
    newRow.querySelector(".delete-btn").addEventListener("click", function () {

        if (type === "income") {
            totalIncome -= amount;
        } else {
            totalExpense -= amount;
        }

        incomeDisplay.textContent = totalIncome;
        expenseDisplay.textContent = totalExpense;
        balanceDisplay.textContent = totalIncome - totalExpense;

        newRow.remove();
    });

    // Clear inputs
    dateInput.value = "";
    amountInput.value = "";
    typeInput.selectedIndex = 0;

});
