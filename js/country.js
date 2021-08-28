// Corrigir erro de CORS
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

returnButton = document.querySelector('#btn-return').onclick = () => {
    window.history.length > 1 ? window.history.go(-1) : window.location.href = 'home.html';
}

// Recebe o país passado por parâmetros da página anterior
const country = urlParams.get('country')

// Tag de ícone
const icon = document.querySelector("head link[rel='icon']")
// Tag de título
const title = document.querySelector('head title')

// Dados a serem preenchidos
const countryFlag = document.querySelector('#country figure img')
const countryName = document.querySelector('#country-name span')
const countryCapital = document.querySelector('#country-capital span')
const countryRegion = document.querySelector('#country-region span')
const countrySubregion = document.querySelector('#country-subregion span')
const countryPopulation = document.querySelector('#country-population span')
const countryLanguage = document.querySelector('#country-language span')


// Função que preenche os resultados
async function fillResults() {

    query = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`, options)
    resultado = await query.json()

    // Preenche os campos com os dados do país recebido por parâmetro
    icon.href = resultado.flag
    title.innerText = resultado.name
    countryFlag.src = resultado.flag
    countryName.innerText = resultado.name
    countryCapital.innerText = resultado.capital
    countryRegion.innerText = resultado.region
    countrySubregion.innerText = resultado.subregion
    countryPopulation.innerText = resultado.population
    countryLanguage.innerText = resultado.languages[0].nativeName

    // Adiciona os países vizinhos
    for (var i = 0; i < resultado.borders.length; i++) {

        query = await fetch(`https://restcountries.eu/rest/v2/alpha/${resultado.borders[i]}`, options)
        borders = await query.json()

        neighbors = document.querySelector('#neighbors div')
        a = document.createElement("a")
        a.href = `country.html?country=${borders.alpha2Code}`
        figure = document.createElement("figure")
        img = document.createElement("img")
        img.src = borders.flag

        neighbors.appendChild(a)
        a.appendChild(figure)
        figure.appendChild(img)

    }
}

fillResults()