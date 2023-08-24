import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  nameVariations: string[] = ['Shubham Chaudhari', 'Jr Software Developer'];
  currentNameIndex: number = 0;
  currentName: string = '';
  cursorVisible: boolean = true;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

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
    }, 100);
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
    }, 50);
  }

  toggleCursor() {
    const cursorElement = this.el.nativeElement.querySelector('#cursor');
    const cursorVisibility = window.getComputedStyle(cursorElement).getPropertyValue('visibility');
    this.renderer.setStyle(cursorElement, 'visibility',
      cursorVisibility === 'hidden' ? 'visible' : 'hidden');
  }
}
