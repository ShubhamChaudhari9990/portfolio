import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public afs: AngularFirestore,
    private toastr: ToastrService, 
    ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      introduction: ['', Validators.required],
      skill: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projects: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  submitForm() {
    if(this.myForm.valid) {
      this.afs.collection("about").add(this.myForm.value)
      .then(() => {
        this.toastr.success('About Information add Successfully');
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
