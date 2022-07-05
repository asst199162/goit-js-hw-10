const options = '?fields=name,capital,population,flags,languages'


export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}${options}`).then(
        res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText)
        });
}