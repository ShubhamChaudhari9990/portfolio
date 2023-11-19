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
        email: [null, Validators.required, Validators.email],
        message: [null, Validators.required]
      })
    }

  submitContact() {
    if(this.myForm.valid) {
      this.afs.collection("contact").add(this.myForm.value)
      .then(() => {
        alert("Thanks for submit");
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
}
