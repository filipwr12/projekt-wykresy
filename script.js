
var data = [
    { rok: "2020", ilosc: 6.23 },
    { rok: "2021", ilosc: 7.62 },
    { rok: "2022", ilosc: 8.78 },
    { rok: "2023", ilosc: 6.55 },
    { rok: "2024", ilosc: 5.35 }
];

let chart = document.getElementById("chart");
let footer = document.getElementById("footer");



data.forEach(item => {
    let bar = document.createElement("div");
    bar.style.height = (item.ilosc * 10) + "%";
    bar.style.backgroundColor = '#30A1F2';
    bar.innerText = item.ilosc;
    chart.appendChild(bar);

    let label = document.createElement("p");
    label.innerText = item.rok;
});
