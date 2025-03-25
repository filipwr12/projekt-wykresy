// liniowy
var data = [
    { rok: "2020", ilosc: 6.23 },
    { rok: "2021", ilosc: 7.62 },
    { rok: "2022", ilosc: 7.99 },
    { rok: "2023", ilosc: 6.55 },
    { rok: "2024", ilosc: 5.35 }
];

let chart = document.getElementById("chart");



data.forEach(item => {
    let bar = document.createElement("div");
    bar.style.height = (item.ilosc * 10) + "%";
    bar.style.backgroundColor = 'rgba(131, 58, 180, 1';
    bar.innerText = item.ilosc;
    chart.appendChild(bar);

});

// kalendarz


// Tablica z nazwami miesięcy
var aMonths = new Array('styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzien');

// Inicjalizacja daty na bieżący moment
var date = new Date();

// Wywołanie funkcji do rysowania kalendarza
Calendar();

// Dodanie nasłuchiwaczy do przycisków
document.querySelector('#prev').addEventListener('click', PrevMonth);
document.querySelector('#next').addEventListener('click', NextMonth);

// Funkcja do przechodzenia do poprzedniego miesiąca
function PrevMonth() {
    // Ustawienie daty na poprzedni miesiąc
    date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    Calendar(); // Aktualizacja kalendarza
}

// Funkcja do przechodzenia do następnego miesiąca
function NextMonth() {
    // Ustawienie daty na następny miesiąc
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    Calendar(); // Aktualizacja kalendarza
}

// Funkcja rysująca kalendarz
function Calendar() {
    let  td = document.querySelectorAll('#calendar tbody td'); // Pobranie komórek kalendarza
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // Pierwszy dzień miesiąca
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Ostatni dzień miesiąca
    const day = firstDay.getDay() ? firstDay.getDay() - 1 : 6; // Dzień tygodnia dla pierwszego dnia

    // Ustawienie nagłówka kalendarza
    document.querySelector('#calendar_top').innerHTML = aMonths[date.getMonth()] + ' ' + date.getFullYear();

    let dzien = 1; // Inicjalizacja zmiennej do dni
    for (let i = 0; i < td.length; i++) {
        // Wypełnienie komórek dniami lub pustymi wartościami
        td[i].innerHTML = (i >= day && dzien <= lastDay.getDate()) ? dzien++ : '';
        // Ukrycie niepotrzebnych komórek
        if (i >= 35) td[i].style.display = (day + dzien - 1 < 36) ? 'none' : '';
    }
    

};



//wykres kolowy

const daneWykresow = {
    wykresKolowy: [
        {rasa: "Chihuahua", wartosc: "0% 40%", kolor: "rgba(131,58,180,1)"},
        {rasa: "Maltipoo", wartosc: "40% 70%", kolor: "rgb(253, 29, 156)"},
        {rasa: "Mops", wartosc: "70% 100%", kolor: "rgba(253, 29, 156, 0.5)"}
    ]
};

// kolowy
const wykres = document.getElementById('wykresKolowy');

wykres.style.background = 'conic-gradient(var(--fiolet)' +  daneWykresow.wykresKolowy[0].wartosc +' ,var(--rozowy)'  +  daneWykresow.wykresKolowy[1].wartosc + ',var(--rozowy2)' +  daneWykresow.wykresKolowy[2].wartosc;



// zegar

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const day = document.getElementById('day')

var monthName = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
]
const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()    
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h

    if(hour.textContent < 10){
        hour.textContent = '0' + hour.textContent
    }

    minute.innerText = min
    if(minute.textContent < 10){
        minute.textContent = '0' + minute.textContent
    }
    second.innerText = sec
    if(second.textContent < 10){
        second.textContent = '0' + second.textContent
    }


})
const styleSheets = document.styleSheets;

function Highliting() {
    let today = new Date();
    let d = today.getDate();
    let td = document.querySelectorAll('#calendar tbody td');
    console.log(td);

    td.forEach(element => {
        if (element.textContent == d) {
            element.style.background = 'rgba(253, 29, 156, 0.5)';
        }

        else if(element.textContent == ''){
            element.id = "pusty"
             document.querySelector('style').innerHTML = `#pusty{outline: none; cursor: default;} tbody td:hover {outline: 1px solid black;
        cursor: pointer;} `;
            }

       document.querySelector('#next').addEventListener('click', function(){
         if(element.textContent == ''){
            element.id = "pusty"
             document.querySelector('style').innerHTML = `#pusty{outline: none; cursor: default;} tbody td:hover {outline: 1px solid black;
        cursor: pointer;} `;
            }
        else if(element.textContent != ''){
            element.id = ""
        }
       });
       document.querySelector('#prev').addEventListener('click', function(){
        if(element.textContent == ''){
           element.id = "pusty"
            document.querySelector('style').innerHTML = `#pusty{outline: none; cursor: default;} tbody td:hover {outline: 1px solid black;
       cursor: pointer;} `;
           }
       else if(element.textContent != ''){
           element.id = ""
       }
      })
        
    });
}
Highliting();
