import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}

  /**default value */
  openMenu:boolean=false

  /**show menu */
  showMenu(){
    this.openMenu = !this.openMenu
  }

  /**closing menu bar */
  close(){
    this.openMenu = false
  }

  scrollToSectionAfterNav(sectionId: string) {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Wait for DOM to render
      });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }

    this.openMenu = false;
  }

  gotToContactForm(){
    // const contactScreen = document.getElementById('contact')
    // contactScreen?.scrollIntoView({behavior:'smooth'})
    // this.openMenu = false
    this.scrollToSectionAfterNav('contact');

  }


  goToHomePage(){
    // const homeScreen = document.getElementById('hero')
    // homeScreen?.scrollIntoView({behavior:'smooth'})
    // this.openMenu = false
    this.scrollToSectionAfterNav('hero');

  }

  goToServicesPage(){
    // const serviceScreen = document.getElementById('services')
    // serviceScreen?.scrollIntoView({behavior:'smooth'})
    // this.openMenu = false
    this.scrollToSectionAfterNav('services');
  }

  goToDirectorsPage(){
    // const serviceScreen = document.getElementById('directors')
    // serviceScreen?.scrollIntoView({behavior:'smooth'})
    // this.openMenu = false
    this.scrollToSectionAfterNav('directors');
  }
}
