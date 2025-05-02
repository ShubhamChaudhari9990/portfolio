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

    logos = [
      { name: 'Angular', src: 'assets/logos/angular.png' },
      { name: 'Ionic', src: 'assets/logos/ionic.png' },
      { name: 'Capacitor', src: 'assets/logos/capacitor.png' },
      { name: 'Firebase', src: 'assets/logos/firebase.png' },
      { name: 'Firestore', src: 'assets/logos/firestore.png' },
      { name: 'Firebase Auth', src: 'assets/logos/firebase-auth.png' },
      { name: 'Firebase Functions', src: 'assets/logos/cloud-functions.png' },
      { name: 'Node.js', src: 'assets/logos/nodejs.png' },
      { name: 'Stripe', src: 'assets/logos/stripe.png' },
      { name: 'SendGrid', src: 'assets/logos/sendgrid.png' },
      { name: 'Twilio', src: 'assets/logos/twilio.png' },
      { name: 'GitHub', src: 'assets/logos/github.png' },
      { name: 'HTML5', src: 'assets/logos/html5.png' },
      { name: 'CSS3', src: 'assets/logos/css3.png' },
      { name: 'JavaScript', src: 'assets/logos/javascript.png' },
      { name: 'TypeScript', src: 'assets/logos/typescript.png' },
      { name: 'RxJS', src: 'assets/logos/rxjs.png' },
      { name: 'SCSS', src: 'assets/logos/sass.png' },
      { name: 'Tailwind CSS', src: 'assets/logos/tailwindcss.png' },
      { name: 'Bootstrap', src: 'assets/logos/bootstrap.png' },
      { name: 'Postman', src: 'assets/logos/postman.png' },
      { name: 'Figma', src: 'assets/logos/figma.png' },
      { name: 'VS Code', src: 'assets/logos/vscode.png' }
    ];
    

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
