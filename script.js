const daneWykresow = {
    wykresKolowy: [
        {rasa: "Chihuahua", wartosc: "0% 40%", kolor: "rgba(131,58,180,1)"},
        {rasa: "Maltipoo", wartosc: "40% 70%", kolor: "rgb(253, 29, 156)"},
        {rasa: "Mops", wartosc: "70% 100%", kolor: "rgba(253, 29, 156, 0.5)"}
    ]
};

const wykres = document.getElementById('wykresKolowy');

wykres.style.background = 'conic-gradient(var(--fiolet)' +  daneWykresow.wykresKolowy[0].wartosc +' ,var(--rozowy)'  +  daneWykresow.wykresKolowy[1].wartosc + ',var(--rozowy2)' +  daneWykresow.wykresKolowy[2].wartosc;
