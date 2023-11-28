import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {SearchCepService} from "../service/search-cep.service";

@Directive({
  selector: '[appValidatingCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidatingCepDirective,
    multi: true
  }]
})
export class ValidatingCepDirective implements AsyncValidator{

  constructor(private searchCepService: SearchCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors
      | null>
      | Observable<ValidationErrors
      | null> {
    const cep = control.value;

    return this.searchCepService.getSearchCep(cep).pipe(map((result: any) =>
      result.erro ? {'appValidatingCep': true} : null
    ));
  }

}
