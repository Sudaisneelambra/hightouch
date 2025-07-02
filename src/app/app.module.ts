import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ContactComponent } from './components/contact/contact.component';
import { Notfound } from './pages/notFount/notfound.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './pages/singleProducts/product.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Notfound,
    ProductComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    CaseStudyComponent,
    FooterComponent,
    OurStoryComponent,
    ContactComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
