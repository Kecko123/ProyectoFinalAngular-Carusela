import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validatorsErrors'
})
export class ValidatorsErrorsPipe implements PipeTransform {

  transform(errors?: ValidationErrors | null, ...args: unknown[]): unknown {
    if (!!errors) {

      if (errors['required'])
        return 'Este campo es requerido'
      if (errors['email'])
        return 'Ingrese un email valido'

      if (errors['minlength'])
        return 'La contraseña debe superar los ' + errors['minlength']?.requiredLength + ' digitos';
    }
    return null;
  }

}
