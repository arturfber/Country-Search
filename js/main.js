window.onload = () => {

    // Variáveis
    let fillPage, resultado, result = document.getElementById("result")
    document.querySelector(".result").style.display = "none"

    returnButton = document.querySelector('#btn-return').onclick = () => {
        window.history.length > 1 ? window.history.go(-1) : window.location.href = 'index.html';
    }


    // Dois campos de filtro
    let filter1 = document.getElementsByTagName("select")[0]
    filter2 = document.getElementsByTagName("select")[1]

    // Corrigir erro de CORS
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    filter1.oninput = () => {
        let times = 0
        document.querySelector(".result").style.display = "block"
        filter2.innerHTML = ""

        // Cria uma lista dinâmica no segundo filtro dependendo da opção selecionada no primeiro
        switch (filter1.value) {

            case '#':
                document.querySelector(".result").style.display = "none"
                result.innerHTML = ""
                break;

            case 'region':

                const Regions = ['americas', 'asia', 'africa', 'europe', 'oceania'];

                times = 10
                filter2.innerHTML += '<option value="#">Escolha uma região</option>'

                for (var i = 0; i < Regions.length; i++) {
                    option = document.createElement("option")
                    option.value = Regions[i]
                    option.innerText = Regions[i]
                    filter2.appendChild(option)
                }
                break;

            case 'capital':

                const Capitals = ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amman", "Amsterdam", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Asuncion", "Athens", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre", "Beijing", "Beirut", "Belfast", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Cairo", "Canberra", "Caracas", "Cardiff", "Castries", "Chisinau", "Colombo", "Conakry", "Copenhagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dublin", "Dushanbe", "Edinburgh", "Freetown", "Funafuti", "Gaborone", "Georgetown", "Gitega", "Guatemala City", "Hanoi", "Harare", "Havana", "Helsinki", "Honiara", "Islamabad", "Jakarta", "Jerusalem", "Juba", "Kabul", "Kampala", "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait City", "La Paz (administrative), Sucre (official)", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lome", "London", "London", "Luanda", "Lusaka", "Luxembourg", "Madrid", "Majuro", "Malabo", "Male", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabana", "Melekeok", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moscow", "Muscat", "N'Djamena", "Nairobi", "Nassau", "Nay Pyi Taw", "New Delhi", "Niamey", "Nicosia", "No official capital", "Nouakchott", "Nuku'alofa", "Nur-Sultan", "Oslo", "Ottawa", "Ouagadougou", "Palikir", "Panama City", "Paramaribo", "Paris", "Phnom Penh", "Podgorica", "Port au Prince", "Port Louis", "Port Moresby", "Port of Spain", "Port Vila", "Porto Novo", "Prague", "Praia", "Pretoria, Bloemfontein, Cape Town", "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavik", "Riga", "Riyadh", "Rome", "Roseau", "Saint George's", "Saint John's", "San Jose", "San Marino", "San Salvador", "Sana'a", "Santiago", "Santo Domingo", "Sao Tome", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Suva", "Taipei", "Tallinn", "Tarawa Atoll", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Thimphu", "Tirana", "Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz", "Valletta", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington D.C.", "Wellington", "Windhoek", "Yamoussoukro", "Yaounde", "Yerevan", "Zagreb"]

                times = 1
                filter2.innerHTML += '<option value="#">Escolha uma capital</option>'

                for (var i = 0; i < Capitals.length; i++) {
                    option = document.createElement("option")
                    option.value = Capitals[i]
                    option.innerText = Capitals[i]
                    filter2.appendChild(option)
                }
                break;

            case 'lang':
                const Languages = ["Selecione uma língua", "ab", "aa", "af", "ak", "sq", "am", "ar", "an", "hy", "as", "av", "ae", "ay", "az", "bm", "ba", "eu", "be", "bn", "bi", "bs", "br", "bg", "my", "ca", "ch", "ce", "ny", "zh", "cv", "kw", "co", "cr", "hr", "cs", "da", "dv", "nl", "dz", "en", "eo", "et", "ee", "fo", "fj", "fi", "fr", "ff", "gl", "ka", "de", "el", "gn", "gu", "ht", "ha", "he", "hz", "hi", "ho", "hu", "ia", "id", "ie", "ga", "ig", "ik", "io", "is", "it", "iu", "ja", "jv", "kl", "kn", "kr", "ks", "kk", "km", "ki", "rw", "ky", "kv", "kg", "ko", "ku", "kj", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "gv", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mh", "mn", "na", "nv", "nd", "ne", "ng", "nb", "nn", "no", "ii", "nr", "oc", "oj", "cu", "om", "or", "os", "pa", "pi", "fa", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "sa", "sc", "sd", "se", "sm", "sg", "sr", "gd", "sn", "si", "sk", "sl", "so", "st", "es", "su", "sw", "ss", "sv", "ta", "te", "tg", "th", "ti", "bo", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "cy", "wo", "fy", "xh", "yi", "yo", "za", "zu"]

                times = 10
                filter2.innerHTML += '<option value="#">Escolha uma língua</option>'

                for (var i = 0; i < Languages.length; i++) {
                    option = document.createElement("option")
                    option.value = Languages[i]
                    option.innerText = Languages[i]
                    filter2.appendChild(option)
                }
                break;

            case 'alpha':
                const Countries = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GU", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MY", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SB", "SH", "SA", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TW", "TV", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VN", "VU", "VI", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW", ""]

                times = 1
                filter2.innerHTML += '<option value="#">Escolha um país</option>'

                for (var i = 0; i < Countries.length; i++) {
                    option = document.createElement("option")
                    option.value = Countries[i]
                    option.innerText = Countries[i]
                    filter2.appendChild(option)
                }
                break;

            case 'callingcode':
                const CallingCodes = ["+1","+7","+20","+27","+30","+31","+32","+33","+34","+36","+39","+40","+41","+43","+44","+45","+46","+47","+48","+49","+51","+52","+53","+54","+55","+56","+57","+58","+60","+61","+62","+63","+64","+65","+66","+81","+82","+84","+86","+90","+91","+92","+93","+94","+95","+98","+211","+212","+213","+216","+218","+220","+221","+222","+223","+224","+225","+226","+227","+228","+229","+230","+231","+232","+233","+234","+235","+236","+237","+238","+239","+240","+241","+242","+243","+244","+245","+246","+247","+248","+249","+250","+251","+252","+253","+254","+255","+256","+257","+258","+260","+261","+262","+263","+264","+265","+266","+267","+268","+269","+290","+291","+297","+298","+299","+350","+351","+352","+353","+354","+355","+356","+357","+358","+359","+370","+371","+372","+373","+374","+375","+376","+377","+378","+379","+380","+381","+382","+383","+385","+386","+387","+389","+420","+421","+423","+500","+501","+502","+503","+504","+505","+506","+507","+508","+509","+590","+591","+592","+593","+594","+595","+596","+597","+598","+599","+670","+672","+673","+674","+675","+676","+677","+678","+679","+680","+681","+682","+683","+685","+686","+687","+688","+689","+690","+691","+692","+850","+852","+853","+855","+856","+880","+886","+960","+961","+962","+963","+964","+965","+966","+967","+968","+970","+971","+972","+973","+974","+975","+976","+977","+992","+993","+994","+995","+996","+998"]

                times = 10
                filter2.innerHTML += '<option value="#">Escolha um código de ligação</option>'

                for (var i = 0; i < CallingCodes.length; i++) {
                    option = document.createElement("option")
                    option.value = CallingCodes[i].replace("+", "")
                    option.innerText = CallingCodes[i]
                    filter2.appendChild(option)
                }
                break;
        }


        filter2.oninput = () => {

            if ((filter2.value == "") || (filter2.value == "#")) {
                result.innerHTML = ""
                return
            } else {
                let query = `${filter1.value}/${filter2.value}`
                fillResults(query, times)
            }
        }
    }



    async function fillResults(query, times) {
        search = await fetch(`https://restcountries.eu/rest/v2/${query}`, options)
        resultado = await search.json()
        // console.log(search)
        // console.log(resultado)

        result.innerHTML = ""

        for (var i = 0; i < times; i++) {


            a = document.createElement("a")
            console.log(resultado[i].alpha2Code)
            query.includes("alpha") ? a.href = `country.html?country=${resultado.alpha2Code}` : a.href = `country.html?country=${resultado[i].alpha2Code}`

            figure = document.createElement("figure")
            img = document.createElement("img")

            query.includes("alpha") ? img.src = resultado.flag : img.src = resultado[i].flag

            figure.appendChild(img)
            a.appendChild(figure)
            result.appendChild(a)

        }
    }



}