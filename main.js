var baseUrl = "http://data.fixer.io/api/latest?access_key=";
var fromCurrency = "";
var toCurrency = "";
var inputAmount = 0;
var access_key = '7d6f95a648c5cad4400e81ed4f3b0c52';

function convert() {
    fromCurrency = document.getElementById('input-currency').value;
    toCurrency = document.getElementById('output-currency').value;
    inputAmount = document.getElementById('input-amount').value;
    var url = baseUrl + access_key; 
    if (fromCurrency && toCurrency && inputAmount) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                var convertedValue = response.rates[toCurrency] * inputAmount;
                document.getElementById("output-amount").value = convertedValue;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}