import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  currentIndex: number = 0;
  images: string[] = [
    '../../../assets/about/monastery1.jpg',
    '../../../assets/about/monastery2.jpg',
    '../../../assets/about/monastery3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    // Automatically slide every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  // Move to the next slide
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Move to a specific slide when a circle is clicked
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
