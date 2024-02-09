import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MyValidators } from '../../../validators/forbidden-value.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnChanges {

  userFormGroup = new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        MyValidators.forbiddenValue('admin', 'root'),
      ]
    }),
    email: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.email ] }),
    password: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) ] }),
    type: new FormControl<'CLIENT' | 'ADMIN'>('CLIENT', { nonNullable: true })
  });

  @Input() user?: User;
  @Output() userSubmit = new EventEmitter<Partial<User>>();

  ngOnChanges(): void {
    if (this.user)
      this.userFormGroup.patchValue(this.user);
  }

  onSubmit() {
    if (!this.userFormGroup.invalid)
      this.userSubmit.emit(this.userFormGroup.value);
    else
      this.userFormGroup.markAllAsTouched();
  }

  showErrors(control?: AbstractControl): boolean {
    return ((control?.touched || !control?.pristine) && control?.invalid) ?? false;
  }

}
