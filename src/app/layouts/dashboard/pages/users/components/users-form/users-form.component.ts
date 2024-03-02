import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.scss'
})
export class UsersFormComponent {
  userForm: FormGroup;

  @Output()
  userUploaded = new EventEmitter

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      surname: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      phonenumber: this.fb.control('', Validators.required)
    })
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.userUploaded.emit(this.userForm.value);
      this.userForm.reset();
    }
  }
}
