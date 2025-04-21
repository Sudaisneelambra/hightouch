import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {


  gotToContactForm(){
    const contactScreen = document.getElementById('contact')
    contactScreen?.scrollIntoView({behavior:'smooth'})
  }
}
