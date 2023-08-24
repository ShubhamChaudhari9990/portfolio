import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef){}
  name = 'Shubham Chaudhari';
  arrow = false;
  image1 = '../../assets/java.jpg'
  web = '../../assets/web.jpg'
  img2 = '../../assets/1.jpg'
  images = [this.img2, this.web, this.img2].map((n) => `${n}`);

  nameVariations: string[] = ['Shubham Chaudhari', 'Jr Software Developer'];
  currentNameIndex: number = 0;
  currentName: string = '';
  cursorVisible: boolean = true;

  ngOnInit() {
    this.typeName();
  }

  typeName() {
    const nameToType = this.nameVariations[this.currentNameIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      this.currentName += nameToType[charIndex];

      charIndex++;

      if (charIndex >= nameToType.length) {
        clearInterval(typingInterval);
        this.toggleCursor();
        setTimeout(() => {
          this.toggleCursor();
          setTimeout(() => {
            this.eraseName();
          }, 1000);
        }, 1500);
      }
    }, 70);
  }

  eraseName() {
    const nameToErase = this.nameVariations[this.currentNameIndex];
    let charIndex = nameToErase.length - 1;

    const erasingInterval = setInterval(() => {
      this.currentName = this.currentName.slice(0, charIndex);

      charIndex--;

      if (charIndex < 0) {
        clearInterval(erasingInterval);
        this.toggleCursor();
        this.currentNameIndex = (this.currentNameIndex + 1) % this.nameVariations.length;
        this.typeName();
      }
    }, 30);
  }

  toggleCursor() {
    const cursorElement = this.el.nativeElement.querySelector('#cursor');
    const cursorVisibility = window.getComputedStyle(cursorElement).getPropertyValue('visibility');
    this.renderer.setStyle(cursorElement, 'visibility',
      cursorVisibility === 'hidden' ? 'visible' : 'hidden');
  }
}
