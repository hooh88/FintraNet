import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OnlyNumberDirective,
      multi: true,
    },
  ],
})
export class OnlyNumberDirective {
  constructor() {}
  validate(element: AbstractControl): { [key: string]: any } | null {
    const numberRegex = /^[0-9]*$/;
    let valid;
    valid = numberRegex.test(element.value);
    return valid ? null : { appOnlyNumber: true };
  }
}
