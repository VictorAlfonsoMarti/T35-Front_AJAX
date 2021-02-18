addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('botonGetAll').addEventListener('click', getAll, false);
    document.getElementById('botonGetName').addEventListener('click', getName, false);
    document.getElementById('botonGetNameFull').addEventListener('click', getNameFull, false);
    document.getElementById('botonGetAlpha').addEventListener('click', getAlpha, false);
    document.getElementById('botonGetAlphaCodes').addEventListener('click', getAlphaCodes, false);
    document.getElementById('botonGetCurrency').addEventListener('click', getCurrency, false);
    document.getElementById('botonGetLang').addEventListener('click', getLang, false);
    document.getElementById('botonGetCapital').addEventListener('click', getCapital, false);
    document.getElementById('botonGetCallCode').addEventListener('click', getCallCode, false);
    document.getElementById('botonGetRegion').addEventListener('click', getRegion, false);
    document.getElementById('botonGetRegionalBloc').addEventListener('click', getRegionalBloc, false);
    document.getElementById('botonGetService').addEventListener('click', botonGetService, false);
}

function getAll() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getName() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/" + document.getElementById("inputGetName").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getNameFull() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/" + document.getElementById("inputGetNameFull").value + "?fullText=true",
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getAlpha() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha/" + document.getElementById("inputGetAlpha").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getAlphaCodes() {
    let code1 = document.getElementById("inputGetAlphaCodes1").value;
    let code2 = document.getElementById("inputGetAlphaCodes2").value;
    let code3 = document.getElementById("inputGetAlphaCodes3").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha?codes=" + code1 + ";" + code2 + ";" + code3 ,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getCurrency() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/currency/" + document.getElementById("inputGetCurrency").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getLang() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/lang/" + document.getElementById("inputGetLang").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getCapital() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/capital/" + document.getElementById("inputGetCapital").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getCallCode() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/callingcode/" + document.getElementById("inputGetCallCode").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getRegion() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/region/" + document.getElementById("inputGetRegion").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function getRegionalBloc() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/regionalbloc/" + document.getElementById("inputGetRegionalBloc").value,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}

function botonGetService() {
    let servicio = document.getElementById("inputGetService").value;
    let campo1 = document.getElementById("inputGetServiceField1").value;
    let campo2 = document.getElementById("inputGetServiceField2").value;
    let campo3 = document.getElementById("inputGetServiceField3").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/" + servicio + "?fields=" + campo1 + ";" + campo2 + ";" + campo3,
        method: 'GET',
        dataType: 'json',
        header: {
            'Accept':'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',

        success: function (data) {
            document.getElementById("contenido").innerHTML = JSON.stringify(data, undefined, 2); 
        },
        error: function (error){
            console.log(error);
        }
    });
}