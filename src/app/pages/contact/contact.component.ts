import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = {
    name : null,
    email : null,
    message : null
  }

  constructor(public afs : AngularFirestore) {}

  submitContact(contact:any) {
    debugger
    this.afs.collection("contact").add(contact);
  }
}
