import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  arrow = false;
  about: any;
  images = ['login1', 'login2', 'login3', 'login4', 'login5', 'crud1', 'crud2', 'crud3']
    .map((n) => `../../../assets/${n}.png`);

  constructor(
    public afs: AngularFirestore,
  ){
    this.afs.collection('about', ref => ref.where('profile', '==', 'developer')).valueChanges().subscribe((data)=>{
      data.forEach((info) => {
        this.about = info
      })
    })
  }

  showProject(project:any) {
    window.open('https://'+project.projectUrl,'_blank');
  }
}
