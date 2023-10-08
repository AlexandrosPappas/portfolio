import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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

  async onSubmit() {
    //first we check if the form is valid
    if (this.contactForm.valid) {
      //we initialize the public key
      emailjs.init('pSS_m_jaNyiUmPWEH');

      //we send the mail with the forms data
      let response = await emailjs.send('service_orfs3f2', 'template_ohszm4u', {
        from_name: this.contactForm.value.firstName,
        message: this.contactForm.value.message,
        from_email: this.contactForm.value.email,
        from_lastname: this.contactForm.value.lastName,
      });

      this.contactForm.reset();
    }
  }
}
