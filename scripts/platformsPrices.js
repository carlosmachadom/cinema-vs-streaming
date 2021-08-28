// Total streaming platforms price
const selectedPlatforms = [];

function calculatePlatformsTotalPrice () {
    const PLATFORMS = document.querySelectorAll('input[name="platform"]:checked');       

    PLATFORMS.forEach((platform) => {

        if (platform.value === 'netflix') {
            platformPrice = 6.5;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'amazon') {
            platformPrice = 4;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'disney') {
            platformPrice = 6.2;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'hulu') {
            platformPrice = 3;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'hbo') {
            platformPrice = 3.5;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'crunchyroll') {
            platformPrice = 3.6;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'apple') {
            platformPrice = 4;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        } else if (platform.value === 'youtube') {
            platformPrice = 4.6;
            selectedPlatforms.push({
                name: platform.value,
                price: platformPrice,
            });
        }
    });

    const individualPrices = selectedPlatforms.map(platform => platform.price);

    const calculateTotalPrice = individualPrices.reduce( 
        function (valorInicial = 0, siguienteValor) {
            return valorInicial + siguienteValor
        }
    );

    const TEXT = document.getElementById('platforms-price');
    TEXT.innerHTML = `<strong>Platforms total price:</strong> $${calculateTotalPrice} USD`;
}



