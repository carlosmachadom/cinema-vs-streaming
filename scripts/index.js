// Inicializando funciones para comparar precios
function comparingPrices() {
    console.group('Total ticket film price');
        calculateTicketsTotalPrice();
    console.groupEnd();

    console.group('Total streaming platforms price');
        calculatePlatformsTotalPrice();
    console.groupEnd();
}


