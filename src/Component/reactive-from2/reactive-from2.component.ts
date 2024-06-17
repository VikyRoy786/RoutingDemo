import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-from2.component.html',
  styleUrl: './reactive-from2.component.css'
})
export class ReactiveFrom2Component {

  myForm: FormGroup=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required,this.pureString]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }
  pureString(control: AbstractControl):any{
    const controlValue = parseInt(control.value);
    if(isNaN(controlValue))
      {
        // input is valid
        return null;
      }
      else
      return {'error':"Number not allowed as name"};
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    //console.log(form);
  }
}
