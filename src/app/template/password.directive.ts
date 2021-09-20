import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordDirective, multi: true },
  ],
})
export class PasswordDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value.password?.length === 0 ||
      control.value.confirm_password?.length === 0
      ? { must_be_set: 'password and confirm_password must be set' }
      : null;
  }
}
