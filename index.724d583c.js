!function(){var n;(n="peru",fetch("https://restcountries.com/v3.1/name/".concat(n).concat("?fields=name,capital,population,flags,languages")).then((function(n){if(n.ok)return n.json();throw new Error(n.statusText)}))).then((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.724d583c.js.map
