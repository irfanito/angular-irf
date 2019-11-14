import { from } from 'rxjs';
import { filter, isEmpty } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { IrfArrays } from "../irf-arrays";
import { IrfForms } from "../irf-forms";
import { CalculService } from "../calcul-service";
import { UtilisateurService } from "../utilisateur-service";
import { Utilisateur } from "../utilisateur";

const pattern: string = "^[+|-]?[0-9]+(?:.[0-9]{1,2})?$";

@Component({
  selector: "irf-evolution",
  templateUrl: "./evolution.component.html"
})
export class EvolutionComponent {
  calculService: CalculService;
  utilisateurs: Utilisateur[];
  validFields: string[] = [];

  pourcentageForm = this.formBuilder.group({
    utilisateur: new FormControl(""),
    ancienneValeur: IrfForms.formControl(pattern),
    nouvelleValeur: IrfForms.formControl(pattern),
    evolution: IrfForms.formControl(pattern)
  });

  /* injection de dépendances */
  constructor(
    private formBuilder: FormBuilder,
    calculService: CalculService,
    utilisateurService: UtilisateurService
  ) {
    this.calculService = calculService;
    this.utilisateurs = utilisateurService
      .getUtilisateurs()
      .subscribe((data: Utilisateur[]) => (this.utilisateurs = data));
  }

  get ancienneValeur(): FormControl {
    return this.pourcentageForm.get("ancienneValeur") as FormControl;
  }

  get nouvelleValeur(): FormControl {
    return this.pourcentageForm.get("nouvelleValeur") as FormControl;
  }

  get evolution(): FormControl {
    return this.pourcentageForm.get("evolution") as FormControl;
  }

  ancienneValeurInput() {
    this.calculer("ancienneValeur");
  }

  nouvelleValeurInput() {
    this.calculer("nouvelleValeur");
  }

  evolutionInput() {
    this.calculer("evolution");
  }

  calculer(name: string) {
    /* utilisation de rxjs */
    let observable: Observable<boolean> = from(this.validFields).pipe(
      filter(e => name === e),
      isEmpty()
    );
    let nameExists: boolean;
    observable.subscribe(b => nameExists = !b);
    if (this.pourcentageForm.get(name).valid && !nameExists) {
      this.validFields.push(name);
    } else if (this.pourcentageForm.get(name).invalid) {
      if (!nameExists) {
        IrfArrays.removeFirst(this.validFields, name);
      }
      this.ancienneValeur.enable();
      this.nouvelleValeur.enable();
      this.evolution.enable();
    }
    if (this.validFields.length === 2) {
      /* destructuration */
      let [first, second, ...rest] = this.validFields.reverse();
      let operand = [second, first];
      if (!IrfArrays.exists(operand, "ancienneValeur")) {
        this.calculerAncienneValeur();
      } else if (!IrfArrays.exists(operand, "nouvelleValeur")) {
        this.calculerNouvelleValeur();
      } else if (!IrfArrays.exists(operand, "evolution")) {
        this.calculerEvolution();
      }
    }
  }

  calculerAncienneValeur() {
    let nouvelleValeurValue: number = this.nouvelleValeur.value;
    let evolutionValue: number = this.evolution.value;
    let ancienneValeurValue: number = this.calculService.calculerAncienneValeur(
      nouvelleValeurValue,
      evolutionValue
    );
    this.ancienneValeur.setValue(ancienneValeurValue);
    this.ancienneValeur.disable();
  }

  calculerNouvelleValeur() {
    let ancienneValeurValue: number = this.ancienneValeur.value;
    let evolutionValue: number = this.evolution.value;
    let nouvelleValeurValue: number = this.calculService.calculerNouvelleValeur(
      ancienneValeurValue,
      evolutionValue
    );
    this.nouvelleValeur.setValue(nouvelleValeurValue);
    this.nouvelleValeur.disable();
  }

  calculerEvolution() {
    let ancienneValeurValue: number = this.ancienneValeur.value;
    let nouvelleValeurValue: number = this.nouvelleValeur.value;
    let evolutionValue: number = this.calculService.calculerEvolution(
      ancienneValeurValue,
      nouvelleValeurValue
    );
    this.evolution.setValue(evolutionValue);
    this.evolution.disable();
  }
}
