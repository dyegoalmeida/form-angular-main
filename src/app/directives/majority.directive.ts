import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[majorityValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MajorityDirective,
    multi: true
  }]
})
export class MajorityDirective implements Validator{

  @Input('majorityValidator') majorityValidator = '';

  constructor() {
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const dtBirth = control.value;
    const yearBirth = new Date(dtBirth).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearBirthMajority = yearBirth + 18;
    const isMajority = (yearBirthMajority <= currentYear);

    return isMajority ? null : {'majorityValidator': true};
  }

}
