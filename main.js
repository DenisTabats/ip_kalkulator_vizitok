const paperPrices = [
    { name: "Обычная", price: 1.5 },
    { name: "Повышенной белизны", price: 2.5 },
    { name: "Мелованная", price: 4 },
    { name: "Дизайнерская", price: 6 }
];

const printTypes = [
    { name: "1-0", template: 100, perSheet: 15 },
    { name: "1-1", template: 150, perSheet: 25 },
    { name: "4-0", template: 200, perSheet: 60 },
    { name: "4-1", template: 210, perSheet: 85 },
    { name: "4-4", template: 220, perSheet: 112 }
];

const qtyInput = document.querySelector("#qty");
const paperSelect = document.querySelector("#paper");
const colorSelect = document.querySelector("#color");
const totalOutput = document.querySelector("#total");

const buildOptions = (select, items) => {
    select.innerHTML = items
        .map(item => `<option value="${item.name}">${item.name}</option>`)
        .join("");
};

buildOptions(paperSelect, paperPrices);
buildOptions(colorSelect, printTypes);

const calculate = () => {
    const qty = Math.max(30, Number(qtyInput.value) || 0);
    const sheets = Math.ceil(qty / 30);

    const paper = paperPrices.find(p => p.name === paperSelect.value);
    const print = printTypes.find(p => p.name === colorSelect.value);

    const sum = print.template
              + paper.price * sheets
              + print.perSheet * sheets;

    totalOutput.textContent = sum.toLocaleString("ru-RU");
};

[qtyInput, paperSelect, colorSelect].forEach(el => {
    el.addEventListener("input", calculate);
});

calculate();