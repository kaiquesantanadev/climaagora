/*
Membros: Gustavo Martins, João Augusto, João Vidal, Kaique Santana, Wellingthon Francisco.
Problema escolhido/tema e sua explicação: Site que mostra em tempo real temperatura de cidades.
const estados = array com objetos, sendo esses objetos os estados do Brasil e suas capitais.
const btn = constante que pega ateavés do DOM o botão html com id 'btn'
var cont = contador que ajuda na função de trocar os países na tela


*/
const estados = [
    { estado: 'Acre', capital: 'Rio Branco' },
    { estado: 'Alagoas', capital: 'Maceió' },
    { estado: 'Amapá', capital: 'Macapá' },
    { estado: 'Amazonas', capital: 'Manaus' },
    { estado: 'Bahia', capital: 'Salvador' },
    { estado: 'Ceará', capital: 'Fortaleza' },
    { estado: 'Distrito Federal', capital: 'Brasília' },
    { estado: 'Espírito Santo', capital: 'Vitória' },
    { estado: 'Goiás', capital: 'Goiânia' },
    { estado: 'Maranhão', capital: 'São Luís' },
    { estado: 'Mato Grosso', capital: 'Cuiabá' },
    { estado: 'Mato Grosso do Sul', capital: 'Campo Grande' },
    { estado: 'Minas Gerais', capital: 'Belo Horizonte' },
    { estado: 'Pará', capital: 'Belém' },
    { estado: 'Paraíba', capital: 'João Pessoa' },
    { estado: 'Paraná', capital: 'Curitiba' },
    { estado: 'Pernambuco', capital: 'Recife' },
    { estado: 'Piauí', capital: 'Teresina' },
    { estado: 'Rio de Janeiro', capital: 'Rio de Janeiro' },
    { estado: 'Rio Grande do Norte', capital: 'Natal' },
    { estado: 'Rio Grande do Sul', capital: 'Porto Alegre' },
    { estado: 'Rondônia', capital: 'Porto Velho' },
    { estado: 'Roraima', capital: 'Boa Vista' },
    { estado: 'Santa Catarina', capital: 'Florianópolis' },
    { estado: 'São Paulo', capital: 'São Paulo' },
    { estado: 'Sergipe', capital: 'Aracaju' },
    { estado: 'Tocantins', capital: 'Palmas' }
];

const btn = document.getElementById('btn');
addEventListener('keypress', function (e) {
    if(e.key == 'Enter') {
        btn.click();
    }
})

async function getWeather(city) {
    const result = document.getElementById('resultado');
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=d624370497d30ca21d54943f48656592&units=metric&lang=pt_br`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.textContent = `Temperatura atual em ${data.name}: ${Math.round(data.main.temp)}ºC`;
    }).catch((error) => result.textContent = 'Cidade não encontrada')
}

var cont = 0
async function getCapitalWeather() {
    const carrossel = document.getElementById('carrossel');

    while(true) {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${estados[cont].capital}&lang=pt_br&appid=d624370497d30ca21d54943f48656592&units=metric&lang=pt_br`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            carrossel.textContent = `Temperatura atual das capitais do Brasil: ${data.name}: ${Math.round(data.main.temp)}ºC`;
                    
            if(cont == 26)
                cont = 0
            else
                cont++
        }).catch((error) => carrossel.textContent = 'Cidade não encontrada')

        await new Promise(res => setTimeout(res, 1000 * 5))
    }
}

getCapitalWeather()
