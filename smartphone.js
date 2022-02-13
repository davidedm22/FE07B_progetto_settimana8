// prima classe
var FirstUser = /** @class */ (function () {
    // dichiarazione del costruttore
    function FirstUser(credito, numerochiamate) {
        this.credito = credito;
        this.numerochiamate = numerochiamate;
    }
    // implementazione metodo ricarica 
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    // implementazione metodo chiamata
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.numerochiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    // implementazione metodo numero404 (return)
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    //  implementazione metodo getNumeroChiamate (return)
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    // implementazione metodo azzeraChiamate() 
    FirstUser.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return FirstUser;
}());
// Implementazione della classe 
var SecondUser = /** @class */ (function () {
    //dichiarazione costruttore
    function SecondUser(credito, numerochiamate) {
        this.credito = credito;
        this.numerochiamate = numerochiamate;
    }
    // implementazione metodo ricarica 
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    // implementazione metodo chiamata
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.numerochiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    // implementazione metodo numero404 (return)
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    //  implementazione metodo getNumeroChiamate (return)
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    // implementazione metodo azzeraChiamate() 
    SecondUser.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return SecondUser;
}());
;
//Implementazione classe
var ThirdUser = /** @class */ (function () {
    //dichiaro costruttore
    function ThirdUser(credito, numerochiamate) {
        this.credito = credito;
        this.numerochiamate = numerochiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.numerochiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return ThirdUser;
}());
;
var primo = new FirstUser(50, 2);
var secondo = new SecondUser(10, 10);
var terzo = new ThirdUser(20, 0);
var ricaricaCredito = 30;
var minutiChiamata = 40;
// console log primo utente
console.log('----------Primo Utente-------------');
console.log("Valore del credito iniziale: ".concat(primo.numero404(), " euro"));
console.log("Numero chiamate iniziali: ".concat(primo.getNumeroChiamate()));
primo.ricarica(ricaricaCredito);
console.log("Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(primo.numero404(), " euro"));
console.log("effettuo una chiamata da ".concat(minutiChiamata, " minuti"));
primo.chiamata(minutiChiamata);
console.log("Numero chiamate: ".concat(primo.getNumeroChiamate()));
console.log("Valore del credito dopo la chiamata: ".concat(primo.numero404()));
primo.azzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento: ".concat(primo.getNumeroChiamate()));
console.log('');
// console log secondo utente
console.log('----------secondo Utente-------------');
console.log("Valore del credito iniziale: ".concat(primo.numero404(), " euro"));
console.log("Numero chiamate iniziali: ".concat(primo.getNumeroChiamate()));
primo.ricarica(ricaricaCredito);
console.log("Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(primo.numero404(), " euro"));
console.log("effettuo una chiamata da ".concat(minutiChiamata, " minuti"));
primo.chiamata(minutiChiamata);
console.log("Numero chiamate: ".concat(primo.getNumeroChiamate()));
console.log("Valore del credito dopo la chiamata: ".concat(primo.numero404()));
primo.azzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento: ".concat(primo.getNumeroChiamate()));
console.log('');
// console log terzo utente
console.log('----------terzo Utente-------------');
console.log("Valore del credito iniziale: ".concat(primo.numero404(), " euro"));
console.log("Numero chiamate iniziali: ".concat(primo.getNumeroChiamate()));
primo.ricarica(ricaricaCredito);
console.log("Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(primo.numero404(), " euro"));
console.log("effettuo una chiamata da ".concat(minutiChiamata, " minuti"));
primo.chiamata(minutiChiamata);
console.log("Numero chiamate: ".concat(primo.getNumeroChiamate()));
console.log("Valore del credito dopo la chiamata: ".concat(primo.numero404()));
primo.azzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento: ".concat(primo.getNumeroChiamate()));
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
