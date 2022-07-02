import './css/styles.css';
const options = '?fields=name,capital,population,flags,languages'




function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}${options}`).then(
        res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText)
        });
}
fetchCountries('peru').then(data => console.log(data),)

const DEBOUNCE_DELAY = 300;

