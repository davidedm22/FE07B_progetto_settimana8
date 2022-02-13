// Interfaccia smartphone
interface Smartphone{
    // inserire proprieta interfaccia
    credito:number  //credito disponibile
    numerochiamate:number //chiamate effettuate

    // dichiarare i metodi
    ricarica(unaRicarica:number): void
    chiamata(minutiDurata:number): void
    numero404(credito: number):number
    getNumeroChiamate():number
    azzeraChiamate():void

}

// prima classe
class FirstUser implements Smartphone{

    // modificatori di accesso sulle proprieta
    public numerochiamate: number;
    public credito: number;

    // dichiarazione del costruttore
    constructor(credito:number, numerochiamate:number){
        this.credito = credito
        this.numerochiamate = numerochiamate
    }

    // implementazione metodo ricarica 
    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
        
    }

    // implementazione metodo chiamata
    public chiamata(minutiDurata: number): void {
        this.numerochiamate ++;
        this.credito -= (0.20 * minutiDurata);
        
    }
    
    // implementazione metodo numero404 (return)
    public numero404(): number {
        return this.credito;
    }
    
    //  implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numerochiamate;
    }

    // implementazione metodo azzeraChiamate() 
    public azzeraChiamate(): void {
        this.numerochiamate = 0;
    }

}

// Implementazione della classe 
class SecondUser implements Smartphone{
    public credito: number;
    public numerochiamate: number;
    //dichiarazione costruttore
    constructor(credito:number, numerochiamate:number){
        this.credito = credito
        this.numerochiamate = numerochiamate
    }
        // implementazione metodo ricarica 

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
        
    }
        // implementazione metodo chiamata

    public chiamata(minutiDurata: number): void {
        this.numerochiamate ++;
        this.credito -= (0.20 * minutiDurata);
        
    }
        // implementazione metodo numero404 (return)

    public numero404(): number {
        return this.credito;
    }
        //  implementazione metodo getNumeroChiamate (return)

    public getNumeroChiamate(): number {
        return this.numerochiamate;
    }
        // implementazione metodo azzeraChiamate() 

    public azzeraChiamate(): void{
        this.numerochiamate = 0;
    }
};
//Implementazione classe
class ThirdUser implements Smartphone{
    public credito: number;
    public numerochiamate: number;
    //dichiaro costruttore
    constructor(credito:number, numerochiamate:number){
        this.credito = credito
        this.numerochiamate = numerochiamate
    }
    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
        
    }
    public chiamata(minutiDurata: number): void {
        this.numerochiamate ++;
        this.credito -= (0.20 * minutiDurata);
        
    }
    public numero404(): number {
        return this.credito;
    }
    public getNumeroChiamate(): number {
        return this.numerochiamate;
    }
    public azzeraChiamate(): void{
        this.numerochiamate = 0;
    }
};

const primo = new FirstUser (50,2);
const secondo = new SecondUser(10, 10);
const terzo = new ThirdUser(20,0);

let ricaricaCredito = 30;
let minutiChiamata= 40;
// console log primo utente
console.log('----------Primo Utente-------------');
console.log(`Valore del credito iniziale: ${primo.numero404()} euro`);
console.log(`Numero chiamate iniziali: ${primo.getNumeroChiamate()}`);
primo.ricarica(ricaricaCredito);
console.log(`Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${primo.numero404()} euro`);
console.log(`effettuo una chiamata da ${minutiChiamata} minuti`);
primo.chiamata(minutiChiamata);
console.log(`Numero chiamate: ${primo.getNumeroChiamate()}`);
console.log(`Valore del credito dopo la chiamata: ${primo.numero404()}`);
primo.azzeraChiamate();
console.log(`Numero chiamate dopo l'azzeramento: ${primo.getNumeroChiamate()}`);
console.log('');

// console log secondo utente

console.log('----------secondo Utente-------------');
console.log(`Valore del credito iniziale: ${primo.numero404()} euro`);
console.log(`Numero chiamate iniziali: ${primo.getNumeroChiamate()}`);
primo.ricarica(ricaricaCredito);
console.log(`Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${primo.numero404()} euro`);
console.log(`effettuo una chiamata da ${minutiChiamata} minuti`);
primo.chiamata(minutiChiamata);
console.log(`Numero chiamate: ${primo.getNumeroChiamate()}`);
console.log(`Valore del credito dopo la chiamata: ${primo.numero404()}`);
primo.azzeraChiamate();
console.log(`Numero chiamate dopo l'azzeramento: ${primo.getNumeroChiamate()}`);
console.log('');

// console log terzo utente
console.log('----------terzo Utente-------------');
console.log(`Valore del credito iniziale: ${primo.numero404()} euro`);
console.log(`Numero chiamate iniziali: ${primo.getNumeroChiamate()}`);
primo.ricarica(ricaricaCredito);
console.log(`Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${primo.numero404()} euro`);
console.log(`effettuo una chiamata da ${minutiChiamata} minuti`);
primo.chiamata(minutiChiamata);
console.log(`Numero chiamate: ${primo.getNumeroChiamate()}`);
console.log(`Valore del credito dopo la chiamata: ${primo.numero404()}`);
primo.azzeraChiamate();
console.log(`Numero chiamate dopo l'azzeramento: ${primo.getNumeroChiamate()}`);
console.log('');




//console log secondo utente
// console.log('Secondo Utente');
// console.log('valore prima della ricarica ' + primo.numero404());
// primo.ricarica(20);
// console.log('Valore dopo la ricarica' + primo.numero404());
// console.log('valore della ricarica disponibile ' + primo.numero404());
// console.log('Numero delle chiamate:' + primo.getNumeroChiamate());
// console.log('dopo l\' azzeramento:');
// primo.azzeraChiamate();
// console.log('Numero delle chiamate : ' + primo.getNumeroChiamate());

// console log terzo utente
// console.log('terzo Utente');
// console.log('valore prima della ricarica ' + primo.numero404());
// primo.ricarica(20);
// console.log('Valore dopo la ricarica' + primo.numero404());
// console.log('valore della ricarica disponibile ' + primo.numero404());
// console.log('Numero delle chiamate:' + primo.getNumeroChiamate());
// console.log('dopo l\' azzeramento:');
// primo.azzeraChiamate();
// console.log('Numero delle chiamate : ' + primo.getNumeroChiamate());

// utilizzo dei metodi giusti per effettuare DUE ricariche e DUE chiamate

//console.log():
/* 'primo utente'
valore carica disponibile : ' -> metodo
'numero chiamate: -> metodo
'dopo l'azzeramento'
'numero chiamate: -> metodo */

// seconda classe e terza classe sono IDENTICHE alla prima cambiando nome classe e nome che implementa la classe