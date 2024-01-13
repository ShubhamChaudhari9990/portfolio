import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  about:any;

  constructor(
    public afs: AngularFirestore,
    private toastr: ToastrService,
  ){
    this.afs.collection('about', ref => ref.where('profile', '==', 'developer')).valueChanges().subscribe((data)=>{
      debugger
      data.forEach((info) => {
        this.about = info
      })
    })
  }
}
