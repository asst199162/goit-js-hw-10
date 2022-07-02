var e;(e="peru",fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)}))).then((e=>console.log(e)));
//# sourceMappingURL=index.2d4f9a3d.js.map
