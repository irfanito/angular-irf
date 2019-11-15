import { CalculService } from "../../app/services/calcul-service";
describe("Test de CalculService", () => {
  let calculService: CalculService;
  beforeEach(() => {
    calculService = new CalculService();
  });
  it("Une valeur de 100 qui devient 80 a évolué de -20%", () => {
    expect(calculService.calculerEvolution(100, 80)).toBe(-20);
  });
  it("Une valeur devenue 80 après avoir évolué de 20% était de 100", () => {
    expect(calculService.calculerAncienneValeur(80, -20)).toBe(100);
  });
  it("Une valeur de 100 qui évolue de -20% devient 80", () => {
    expect(calculService.calculerNouvelleValeur(100, -20)).toBe(80);
  });
});
