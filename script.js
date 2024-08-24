const bill = document.getElementById("billTotalInput");
const tip = document.getElementById("tipInput");
const people = document.getElementById("numberOfPeople");
const perperson = document.getElementById("perPersonTotal");
const totalAmount = document.getElementById("totalAmount");

let peopleNumber = Number(people.innerText);

function calculateBill() {
    let a = Number(bill.value);
    let b = Number(tip.value);

    let percentValue = Number((a * b) / 100);

    const totalBill = a + percentValue;
    const billPerPerson = totalBill / peopleNumber;

    totalAmount.innerText = `$${totalBill.toFixed(2)}`;
    perperson.innerText = `$${billPerPerson.toFixed(2)}`;
}

increasePeople = () => {
    people.innerText = peopleNumber += 1;
    calculateBill();
};

decreasePeople = () => {
    people.innerText = peopleNumber -= 1;
    calculateBill();
};
