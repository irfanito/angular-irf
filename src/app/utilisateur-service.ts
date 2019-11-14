import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Utilisateur } from "./utilisateur";
import { Observable } from "rxjs";

/* appel http */
@Injectable({
  providedIn: "root"
})
export class UtilisateurService {
  utilisateursUrl =
    "https://angular-irf-backend.firebaseio.com/utilisateurs.json?auth=8WdyI5VLmneJ3zAxCCuJyNQJ06Yp4YBIPO0JFscH";

  constructor(private http: HttpClient) {}

  getUtilisateurs(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.utilisateursUrl);
  }
}
