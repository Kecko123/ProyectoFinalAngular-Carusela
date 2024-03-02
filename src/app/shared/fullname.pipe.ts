import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../layouts/dashboard/pages/users/models';


@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    return value.name + ' ' + value.surname;
  }

}
