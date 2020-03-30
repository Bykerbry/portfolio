import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

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
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
    return this._http.post('/send', this.contactForm.value).subscribe( res => {
      console.log(res, 'from subscription');
    })
  }

  formValidation(group: FormGroup) {
    Object.keys(group.controls).forEach(key => {
      const abstractControl = group.get(key)
      this.formErrors[key] = ''
      if (!abstractControl.valid) {
        const errorType = Object.keys(abstractControl.errors)[0]
        this.formErrors[key] = this.validationMsgs[key][errorType]
      }
    });
  }

  /* 
  To Do:
 
    1. Get front end talking to back end
    2. Set up email
    3. Test 
    4. Deploy
  */

}
