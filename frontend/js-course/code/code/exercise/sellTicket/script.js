const citiesElement = document.querySelector('#cities')
const citiesOfCountries = {
    Iran: ['mashhad', 'tehran', 'sari', 'rasht'],
    Usa: ['san diego', 'san andres', 'new york'],
    France: ['paris'],
    Canada: ['vancouver']
}
const changeCity = () => {
    const countriesElementValue = document.querySelector('#countries').value
    if (countriesElementValue === 'selectCountry') {
        citiesElement.innerHTML = "";
        citiesElement.innerHTML = "<option> select city </option> "
    } else{
        const showCities = citiesOfCountries[countriesElementValue];
        // console.log(citiesOfCountries[countriesElementValue]);
        // console.log(countriesElementValue)
        citiesElement.innerHTML = '';
            showCities.forEach(function(params) {
                citiesElement.innerHTML += `<option value="${params}">` + params + `</option>`;
            });

    }
} 
