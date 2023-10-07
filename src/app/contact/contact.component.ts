import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm);

    // emailjs.sendForm('service_vh8oskl', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    //}
  }
}
