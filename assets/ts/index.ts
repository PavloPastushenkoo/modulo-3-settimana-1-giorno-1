interface Smartphone{
    credito: number;
    numeroChiamate: number; 
    ricarica(ricarica: number): void;
    chiamata(minuti: number): void;
    chiama404():number;
    getNumeroChiamata(): number;
    azzeraChiamate():void;
}
class User implements Smartphone{
    nome: string;
    cognome: string;
     credito: number;
     numeroChiamate: number;
    protected costoChiamata: 0.20;
    constructor(_nome:string, _cognome:string){
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoChiamata = 0.20;
    }
    ricarica(ricarica: number): void {
        this.credito += ricarica;
    }
    chiamata(minuti:number): void{
        this.numeroChiamate += minuti
        this.credito -= (minuti * this.costoChiamata)
    }
    chiama404(): number {
        return this.credito
    }
    getNumeroChiamata(): number {
    return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

const Io = new User("Pavlo", "Pastushenko")
console.log("Utente creato: "+ Io.nome + " " + Io.cognome)
console.log("credito iniziale: " + Io.chiama404())
console.log("Minuti iniziali consumati: " + Io.getNumeroChiamata())
Io.ricarica(20);
console.log("Ricarica di 20 euro effettuato")
console.log("Nuovo saldo: " + Io.chiama404());
Io.chiamata(3);
console.log("Chiamata effetuata, minuti consumati" + Io.getNumeroChiamata());
console.log("Nuovo credito: " + Io.chiama404())