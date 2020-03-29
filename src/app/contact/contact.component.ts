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

}
