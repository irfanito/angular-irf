import { Injectable } from "@angular/core";

/* injection de dépendances */
@Injectable({
  providedIn: "root"
})
export class CalculService {
  constructor() {}

  calculerAncienneValeur(nouvelleValeur: number, evolution: number): number {
    return nouvelleValeur / (evolution / 100 + 1);
  }

  calculerNouvelleValeur(ancienneValeur: number, evolution: number): number {
    return +ancienneValeur + (ancienneValeur * evolution) / 100;
  }

  calculerEvolution(ancienneValeur: number, nouvelleValeur: number): number {
    return ((nouvelleValeur - ancienneValeur) * 100) / ancienneValeur;
  }
}
