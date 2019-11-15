import { of } from "rxjs";
import { UtilisateurService } from "../../app/services/utilisateur-service";
import { Utilisateur } from "../../app/model/utilisateur";
describe("Test de UtilisateurService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let utilisateurService: UtilisateurService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    utilisateurService = new UtilisateurService(<any>httpClientSpy);
  });

  it("getUtilisateurs() transfère la réponse du service REST", () => {
    // stub
    const expectedUtilisateurs: Utilisateur[] = [
      { prenom: "Irfane" },
      { prenom: "Prossor" }
    ];
    httpClientSpy.get.and.returnValue(of(expectedUtilisateurs));

    // call and assertions
    utilisateurService
      .getUtilisateurs()
      .subscribe(
        utilisateurs => expect(utilisateurs).toEqual(expectedUtilisateurs),
        fail
      );
    // mock assertions
    expect(httpClientSpy.get.calls.argsFor(0)[0]).toContain(
      "https://angular-irf-backend.firebaseio.com/utilisateurs.json"
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
