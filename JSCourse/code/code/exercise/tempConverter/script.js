let $ = document
const c = $.querySelector('.c')
const f = $.querySelector('.f')
const input = $.querySelector('#input')
const result = $.querySelector('#result')
const resetB = () => {
    result.innerHTML = ''
    input.value = '';
}
const changeB = () => {  
    if (c.innerHTML === '°C') {
        $.title = '°F to °C'
        c.innerHTML = '°F'
        f.innerHTML = '°C'
        input.placeholder = '°F'
    } else{
        $.title = '°C to °F'
        c.innerHTML = 'C°'
        f.innerHTML = '°F'
        input.placeholder = '°C'

    }
    result.innerHTML = ''
    input.value = '';
}
const convertB = () => {
    if (input.value === '') {
        result.innerHTML = 'please insert any value'; 
        result.style.color = 'red';
    }
    else if(!! isNaN(input.value)){
        result.innerHTML = 'please insert number value'; 
        result.style.color = 'red';
    } else{
        if (input.placeholder === '°C') {
            result.innerHTML = input.value +  '°C to  ' + ((input.value * 1.8) + 32) + '°F'; 
        } else{
            result.innerHTML = input.value +  '°F    to  ' + ((input.value - 32) * 5 / 9) + '°C';
        }
        result.style.color = 'blueviolet';
    }
}