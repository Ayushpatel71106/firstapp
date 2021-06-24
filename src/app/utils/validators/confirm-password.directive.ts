import { Directive, ElementRef, Input } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
@Directive({
  selector: '[appConfirmPassword]',
   providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordDirective, multi: true }]
})
export class ConfirmPasswordDirective implements Validator {

  //@Input() cpass;

  constructor() { 
    console.log("hello")
  }
  validate(control: AbstractControl|any): ValidationErrors {
    let pass=control.parent.controls.password.value;
    let cpass=control.value;
    //console.log(this.cpass)
    if(pass!=cpass)
    {
      return {"Errors":true}
    }
    return null
  }


}
