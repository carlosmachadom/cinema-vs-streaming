// Helpers
function priceXticket(num1, num2) {
    return num1 * num2;
}

// Calculate Cinema tickets total price
function calculateTicketsTotalPrice () {
    const FILMS = document.getElementById('films-quantity');
    let filmsQuantity = FILMS.value;

    let selectedCountry = document.getElementById('countries').selectedIndex;
    const COUNTRY = document.getElementById('countries').options;

    let ticketPrice;

    switch (COUNTRY[selectedCountry].index){
        case 1:
            ticketPrice = 5.5;
            break; 
        case 2:
            ticketPrice = 8;
            break; 
        default:
    }

    let totalTicketsPrice = priceXticket(filmsQuantity, ticketPrice);

    const TEXT = document.getElementById('tickets-price');
    TEXT.innerHTML = `<strong>Tickets total price:</strong> $${totalTicketsPrice} USD`;
}
