"use strict";
//Classe que representa a calculadora de gorjeta
class TipCalculator {
    bill;
    serviceQuality;
    numOfPeople;
    constructor(bill, serviceQuality, numOfPeople) {
        this.bill = bill;
        this.serviceQuality = serviceQuality;
        this.numOfPeople = numOfPeople;
    }
    // Método para calcular a gorjeta
    calculateTip() {
        if (this.bill <= 0 || this.serviceQuality <= 0 || this.numOfPeople <= 0) {
            return 0; // Evitar divisões por zero
        }
        const tip = (this.bill * this.serviceQuality) / this.numOfPeople;
        return tip;
    }
}
//Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    const billInput = document.getElementById('bill');
    const serviceQualityInput = document.getElementById('serviceQual');
    const numOfPeopleInput = document.getElementById('people');
    const tipDisplay = document.getElementById('tip');
    if (!billInput || !serviceQualityInput || !numOfPeopleInput || !tipDisplay) {
        console.error('Element not found.');
        return;
    }
    const bill = parseFloat(billInput.value);
    const serviceQuality = parseFloat(serviceQualityInput.value);
    const numOfPeople = parseFloat(numOfPeopleInput.value);
    const calculator = new TipCalculator(bill, serviceQuality, numOfPeople);
    const tipAmount = calculator.calculateTip();
    tipDisplay.innerHTML = `Gorjeta por pessoa: $${tipAmount.toFixed(2)}`;
}
//Adicione um ouvinte de evento para o envio do formulário
const tipsForm = document.getElementById('tipsForm');
if (tipsForm) {
    tipsForm.addEventListener('submit', handleFormSubmit);
}
//let x = 10;
//console.log(x);
