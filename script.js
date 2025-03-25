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
    const td = document.querySelectorAll('#calendar tbody td'); // Pobranie komórek kalendarza
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
}