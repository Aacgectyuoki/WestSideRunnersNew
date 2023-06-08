import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule, NgForm, Validators, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
init("user_66nwzX6xZ5j1WCaDKBM51");

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
form: any;

events = this._formBuilder.group({
  k5: false,
  k10: false,
  half: false,
  marathon: false,
  track: false,
  other: false,
});

// selectedGender!: string;
genders: string[] = ['Male', 'Female', 'Non-Binary'];


nameFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
]);

genderFormControl = new FormControl('', Validators.required);
// genders: Gender[] = [
//   {value: 'male', viewValue: 'Male'},
//   {value: 'female', viewValue: 'Female'},
//   {value: 'nonBinary', viewValue: 'Non-Binary'},
// ];

phoneFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
]);

address1FormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
]);

cityFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
]);

stateFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
]);

zipFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
]);

// genderFormControl = new FormControl('', [
//   Validators.required,
// ]);

emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

// backgroundFormControl = new FormControl('', [
//   Validators.required,
//   Validators.minLength(1),
// ]);

matcher = new MyErrorStateMatcher();
  submitted!: false;
  // formData = {
  //   name: '',
  //   email: '',
  //   phone: ''
  // };

  // submitForm() {
  //   // Send the form data to the server or email service
  //   const emailBody = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}`;
  //   const subject = 'New Registration Submission';

  //   window.open(`mailto:maxdell-thibodeau@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`);
  // }

   constructor(private _formBuilder: FormBuilder, private router: Router) { }

   ngOnInit(): void { }

  public sendEmail(e: Event): void {
    e.preventDefault();
    emailjs.sendForm('service_kjtfle7', 'template_0l318gy', e.target as HTMLFormElement, 'user_66nwzX6xZ5j1WCaDKBM51')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        window.location.reload();
        window.scrollTo(0,0);
      }, (error) => {
        console.log(error.text);
      });
  }

//   goToPage(pageName:string){
//     this.router.navigate([`${pageName}`]);
//   }
}
