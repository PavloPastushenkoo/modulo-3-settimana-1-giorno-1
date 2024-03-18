"use strict";
class User {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoChiamata = 0.20;
    }
    ricarica(ricarica) {
        this.credito += ricarica;
    }
    chiamata(minuti) {
        this.numeroChiamate += minuti;
        this.credito -= (minuti * this.costoChiamata);
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const Io = new User("Pavlo", "Pastushenko");
console.log("Utente creato: " + Io.nome + " " + Io.cognome);
console.log("credito iniziale: " + Io.chiama404());
console.log("Minuti iniziali consumati: " + Io.getNumeroChiamata());
Io.ricarica(20);
console.log("Ricarica di 20 euro effettuato");
console.log("Nuovo saldo: " + Io.chiama404());
Io.chiamata(3);
console.log("Chiamata effetuata, minuti consumati" + Io.getNumeroChiamata());
console.log("Nuovo credito: " + Io.chiama404());
