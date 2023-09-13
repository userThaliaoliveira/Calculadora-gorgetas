//Classe que representa a calculadora de gorjeta
class TipCalculator {
    private bill: number;
    private serviceQuality: number;
    private numOfPeople: number;

    constructor(bill: number, serviceQuality: number, numOfPeople: number) {
        this.bill = bill;
        this.serviceQuality = serviceQuality;
        this.numOfPeople = numOfPeople;
    }

    // Método para calcular a gorjeta
    calculateTip(): number {
        if (this.bill <= 0 || this.serviceQuality <= 0 || this.numOfPeople <= 0) {
            return 0; // Evitar divisões por zero
        }

        const tip = (this.bill * this.serviceQuality) / this.numOfPeople;
        return tip;
    }
}

//Função para lidar com o envio do formulário
function handleFormSubmit(event: Event): void {
   event.preventDefault();

   const billInput: HTMLInputElement | null = document.getElementById('bill') as HTMLInputElement;
   const serviceQualityInput: HTMLInputElement | null = document.getElementById('serviceQual') as HTMLInputElement;
   const numOfPeopleInput: HTMLInputElement | null = document.getElementById('people') as HTMLInputElement;
   const tipDisplay: HTMLElement | null = document.getElementById('tip');

   if (!billInput || !serviceQualityInput || !numOfPeopleInput || !tipDisplay) {
       console.error('Element not found.');
       return;
   }

    const bill: number = parseFloat(billInput.value);
    const serviceQuality: number = parseFloat(serviceQualityInput.value);
    const numOfPeople: number = parseFloat(numOfPeopleInput.value);

   const calculator = new TipCalculator(bill, serviceQuality, numOfPeople);
   const tipAmount = calculator.calculateTip();

   tipDisplay.innerHTML = `Gorjeta por pessoa: $${tipAmount.toFixed(2)}`;
}

//Adicione um ouvinte de evento para o envio do formulário
const tipsForm: HTMLFormElement | null = document.getElementById('tipsForm') as HTMLFormElement;
if (tipsForm) {
   tipsForm.addEventListener('submit', handleFormSubmit);
}


//let x = 10;
//console.log(x);
