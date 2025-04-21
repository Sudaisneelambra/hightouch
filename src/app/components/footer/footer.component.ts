import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  gotToContactForm(){
    const contactScreen = document.getElementById('contact')
    contactScreen?.scrollIntoView({behavior:'smooth'})
  }
  
  whatsappNumber = '919745465530';
  openWhatsApp(){
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  }

}
