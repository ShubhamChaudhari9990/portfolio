import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  myForm: FormGroup;

  constructor(
      public afs: AngularFirestore,
      public fb: FormBuilder,
      private toastr: ToastrService, 
    ) {
      this.myForm = this.fb.group({
        name: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        message: [null, Validators.required]
      })
    }
  submitContact() {
    if(navigator.onLine) {
      if(this.myForm.valid) {
        this.afs.collection("contact").add(this.myForm.value)
        .then(() => {
          this.toastr.success('Information Submit Successfully');
          this.myForm.reset();
        })
        .catch((err) => {
          console.log("ERROR = ",err);
        })
      }
      else {
        this.toastr.warning('Warning!, All fields are mandatory');
      }
    }
    else {
      this.toastr.warning('Please check your internet connection');
    }
  }

  openMail() {
    const email = 'shubhamchaudhari9990@gmail.com';
    const subject = 'Hello';
    const body = 'I would like to inquire about ...';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;  
  }

  openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/shubham-chaudhari-0b89b3242/', '_blank');
  }

  openGithubProfile() {
    window.open('https://github.com/ShubhamChaudhari9990','_blank');
  }
}
