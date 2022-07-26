import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appOnlyLetter]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OnlyLetterDirective,
      multi: true,
    },
  ],
})
export class OnlyLetterDirective {

  constructor() { }
  validate(element: AbstractControl): { [key: string]: any } | null {
    const Regex = /^[A-Za-z]*$/;
    let valid;
    valid = Regex.test(element.value);
    return valid ? null : { appOnlyLetter: true };
  }
}
