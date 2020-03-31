import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup
  sending: boolean;
  displaySent: boolean;
  displayError: boolean;
  username: string

  constructor(private _http: HttpClient, private fb: FormBuilder) { }

  validationMsgs = {
    'firstName': {
      'required': 'First Name is required'
    },
    'email': {
      'required': 'E-mail is required',
      'email': 'Must be a valid email address'
    },
    'message': {
      'required': 'Please include the message you wish to send'
    }
  }

  formErrors = {
    'firstName': '',
    'email': '',
    'message': ''
  }


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  formValidation(group: FormGroup, formDirective: FormGroupDirective) {
    Object.keys(group.controls).forEach(key => {
      const abstractControl = group.get(key)
      this.formErrors[key] = ''
      if (!abstractControl.valid) {
        const errorType = Object.keys(abstractControl.errors)[0]
        this.formErrors[key] = this.validationMsgs[key][errorType]
      }
    });

    const errors = Object.keys(this.formErrors).filter( key => this.formErrors[key])
    if (!errors[0]) {
      this.sending = true;
      return this._http.post('/send', this.contactForm.value).subscribe( 
        res => {
          this.sending = false;
          this.displaySent = true;
          this.username = this.contactForm.value.firstName;
          this.contactForm.reset();
          formDirective.resetForm();
      }, 
        error => {
          this.sending = false;
          this.displayError = true;
          this.username = this.contactForm.value.firstName;
          this.contactForm.reset();
          formDirective.resetForm();
          console.log(error);
        }
      )
    }
  }

  getColor(formControl: AbstractControl, first: MatInput) {
    if (formControl.invalid && formControl.touched) {
      return 'warn'
    }
    if (first.focused) {
      return 'primary'
    } 
    return '#AAA'
  }
}
