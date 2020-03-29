import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // contactForm: FormGroup

  constructor() { }



  ngOnInit(): void {
    // this.contactForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   company: new FormControl(),
    //   email: new FormControl()
    // })
  }

  /* 
  To Do:
 
    3. Set Validation
    4. Create Node backend for email
    5. Test 
    6. Deploy
  */

}
