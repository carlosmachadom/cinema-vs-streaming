const form = document.getElementById('form');

const filmsQuantity = document.getElementById('films-quantity');

let ticketsAmount;

let ticketsPrice;

const COUNTRIES = document.getElementById('countries');

const netflix = document.getElementById('netflix');
const amazon = document.getElementById('amazon');
const disney = document.getElementById('disney');
const hulu = document.getElementById('hulu');
const hbo = document.getElementById('hbo');
const crunchyroll = document.getElementById('crunchyroll');
const apple = document.getElementById('apple');
const youtube = document.getElementById('youtube');

let suscriptionPrice = 0;

form.addEventListener('change', function () {
    ticketsAmount = parseInt(filmsQuantity.value);
    console.log(`The quantity of films you watch is: ${ticketsAmount}`);

    selectedCountry = COUNTRIES.value;
    console.log(`Your country is: ${selectedCountry}`);
    
    function countryTicketPrice(string) {
        if (string === 'Colombia') {
            ticketsPrice = 5.5;
        } else if (selectedCountry === 'Mexico') {
            ticketsPrice = 8;
        }
        return ticketsPrice        
    }   

    const countryPrice = countryTicketPrice(selectedCountry);
    console.log(`The average price per ticket in your country is: $${countryPrice} USD`); 
    

    totalTicketsPrice = countryPrice * ticketsAmount;
    console.log(`The total price of all the cinema tickest is: $${totalTicketsPrice} USD`);    

    if (netflix.checked) {
        suscriptionPrice += 6.5;
        console.log(parseInt(`You added netflix and its price is: $${suscriptionPrice}`));
        if (netflix.checked === false) {
            suscriptionPrice = suscriptionPrice - suscriptionPrice;
            console.log('You decided to drop Netflix');
        }
    } 
    if (amazon.checked) {
        suscriptionPrice += 4;
        console.log(suscriptionPrice);
    }
    if (disney.checked) {
        suscriptionPrice += 6.5;
        console.log(suscriptionPrice);
    }
    if (hulu.checked) {
        suscriptionPrice += 3;
        console.log(suscriptionPrice);
    }
    if (hbo.checked) {
        suscriptionPrice += 3.5;
        console.log(suscriptionPrice);
    }
    if (crunchyroll.checked) {
        suscriptionPrice += 3.6;
        console.log(suscriptionPrice);
    }
    if (apple.checked) {
        suscriptionPrice += 4;
        console.log(suscriptionPrice);
    }
    if (youtube.checked) {
        suscriptionPrice += 4.6;
        console.log(suscriptionPrice);
    }

    console.log(`El precio total del las plataformas de streaming que tu gastas mensualmente es: $${suscriptionPrice} USD`)

    function comparingTheBestDeal(priceT, priceP) {
        if (priceT < priceP) {
            console.log(`That\'s a good deal my buddy`);
        } else if (priceP < priceT) {
            console.log(`That\'s a good deal my buddy`);
        } else if (priceP == priceT) {
            console.log(`That\'s the same buddy`);
        }
    }

    comparingTheBestDeal(totalTicketsPrice, suscriptionPrice);
});
