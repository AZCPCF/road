const weather = document.querySelector('.weather');
const container = document.querySelector('.container');
const weatherOne = document.querySelector('#a');
const weatherTwo = document.querySelector('#b');
const weatherThree = document.querySelector('#c');
const weatherFour = document.querySelector('#d');
const weatherFive = document.querySelector('#e');
const citiesWeather = {
    Tehran: ['43 °C', 'sunny', '28%', '50 km/h'],
    Rasht: ['49 °C', 'rainy', '30%', '10 km/h'],
    Sari: ['45 °C', 'rainy', '50%', '75 km/h'],
    Mashhad: ['47 °C', 'sunny', '90%', '41 km/h']
}
const a = document.getElementById('d');
// a.style.height = '500px' 
const showWeather = () => {
    container.style.height = '400px';
    const inputCity = document.querySelector('.search').value;
    const showCities = citiesWeather[inputCity];
    weather.style.display = 'block';
    weatherOne.innerHTML = '';
    weatherTwo.innerHTML = '';
    weatherThree.innerHTML = '';
    weatherFour.innerHTML = '';
    weatherFive.innerHTML = '';
    weatherOne.innerHTML = 'weather in ' + inputCity;
    weatherTwo.innerHTML = showCities[0];
    weatherThree.innerHTML = showCities[1];
    weatherFour.innerHTML = 'humidity : ' + showCities[2];
    weatherFive.innerHTML = 'wind speed : ' + showCities[3];
    console.log(showCities);
} 
