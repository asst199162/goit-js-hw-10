import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryInfo: document.querySelector('.country-info'),
    countryList: document.querySelector('.country-list'),

} 

refs.input.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));


function onInputCountry(event) {
    const inputValue = event.target.value.trim();

refs.countryList.innerHTML = '';
refs.countryInfo.innerHTML = '';

if (!inputValue) {
    return;
}

fetchCountries(inputValue)
    .then(createCountries)
    .catch(error => {
    console.log('error', error)
    return Notify.failure('Oops, there is no country with that name');
    });
    
};

function createCountryInfo(data) {
const countryMarkup = data.map(({ flags, name, capital, population, languages }) => {
    const populationCountry = population.toLocaleString();
    const languagesCountry = Object.values(languages).join(',');
    return `
            <div class="country-list__box">
                <img src="${flags.svg}" width="100">
                <h1>${name.official}</h1>
            <ul>
                <li>Capital:${capital}</li>
                <li>Population:${populationCountry}</li>
                <li>Languages:${languagesCountry}</li>
            </ul>
            </div>

            `;
});
refs.countryInfo.innerHTML = countryMarkup;
}

function createCountryList(data) {
const countriesListMarkup = data
    .map(
    ({ flags, name }) => `
            <li class="country-list__item">
                <img src="${flags.svg}" width="40">
                <p>${name.official}</p>
            </li>
        `,
    )
    .join('');
refs.countryList.innerHTML = countriesListMarkup;
}

function createCountries(data) {
if (data.length >= 10) {
    return Notify.info('Too many matches found. Please enter a more specific name.');
}

if (data.length === 1) {
    return createCountryInfo(data);
}
createCountryList(data);
}






