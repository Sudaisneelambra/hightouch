import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  gotToContactForm(){
    const contactScreen = document.getElementById('contact')
    contactScreen?.scrollIntoView({behavior:'smooth'})
  }

}
