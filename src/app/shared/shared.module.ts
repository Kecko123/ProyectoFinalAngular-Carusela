import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';
import { BigtextDirective } from './bigtext.directive';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ValidatorsErrorsPipe } from './validators-errors.pipe';




@NgModule({
  declarations: [
    FullnamePipe,
    BigtextDirective,
    ValidatorsErrorsPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FullnamePipe,
    BigtextDirective,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    ValidatorsErrorsPipe,
  ]
})
export class SharedModule { }
