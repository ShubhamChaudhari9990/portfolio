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
    this.afs.collection('about').valueChanges().subscribe((data)=>{
      this.about=data;
    })
  }
}
