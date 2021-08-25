// Total streaming platforms price
let selectedPlatforms = [];

function calculatePlatformsTotalPrice () {
    const PLATFORMS = document.querySelectorAll('input[name="platform"]:checked');

    let platformPrice;    

    PLATFORMS.forEach((platform) => {

        if (platform.value === 'netflix') {
            platformPrice = 20;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'amazon') {
            platformPrice = 25;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'disney') {
            platformPrice = 22;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'hulu') {
            platformPrice = 16;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'hbo') {
            platformPrice = 18;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'crunchyroll') {
            platformPrice = 20;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'apple') {
            platformPrice = 28;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'youtube') {
            platformPrice = 12;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        }
    });

    let individualPrices = selectedPlatforms.map(platform => platform.price);

    let calculateTotalPrice = individualPrices.reduce( 
        function (valorInicial = 0, siguienteValor) {
            return valorInicial + siguienteValor
        }
    );

    const TEXT = document.getElementById('platforms-price');
    TEXT.innerHTML = `<strong>Platforms total price:</strong> $${calculateTotalPrice} USD`;
}



