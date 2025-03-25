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
          //td[i].innerHTML = Ustawia zawartość HTML dla komórki td[i] w tabeli kalendarza. To oznacza, że w tej komórce wyświetli się numer dnia lub pozostanie pusta.
          //(i >= day && dzien <= lastDay.getDate()): // i >= day: Sprawdza, czy indeks komórki i jest większy lub równy day. day to dzień tygodnia, w którym zaczyna się miesiąc (0 dla niedzieli, 1 dla poniedziałku, itd.)
          //dzien <= lastDay.getDate(): Sprawdza, czy aktualny numer dnia (dzien) jest mniejszy lub równy liczbie dni w miesiącu (lastDay.getDate()).
          //? dzien++ //operator warunkowy  // Jeśli warunek jest prawdziwy (true), to do komórki td[i] zostanie przypisany aktualny numer dnia (dzien), a następnie dzien zostanie zwiększony o 1 (operacja dzien++).
          //Jeśli warunek jest fałszywy (false), to do komórki td[i] zostanie przypisany pusty ciąg (''), co oznacza, że komórka pozostanie pusta.


        // Ukrycie niepotrzebnych komórek
        if (i >= 35) td[i].style.display = (day + dzien - 1 < 36) ? 'none' : ''; 
        //if (i >= 35): Sprawdza, czy indeks i jest większy lub równy 35.
        //td[i].style.display = ...: Ustawia styl wyświetlania dla komórki td[i]. W zależności od warunku, komórka może być ukryta lub widoczna.
        //(day + dzien - 1 < 36) ? 'none' // operator warunkowy // day + dzien - 1 oblicza, który dzień w kalendarzu jest aktualnie wstawiany 
        //Jeśli warunek jest prawdziwy (true), to td[i].style.display zostanie ustawione na 'none', co oznacza, że komórka będzie ukryta.
        //Jeśli warunek jest fałszywy (false), to td[i].style.display zostanie ustawione na pusty ciąg (''), co oznacza, że komórka będzie widoczna.
    }
}