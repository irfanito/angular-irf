import { FormControl, Validators } from "@angular/forms";
export class IrfForms {
  static formControl(pattern: string): FormControl {
    return new FormControl(
      "",
      Validators.compose([Validators.required, Validators.pattern(pattern)])
    );
  }
}
