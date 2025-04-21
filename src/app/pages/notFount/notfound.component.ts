import { Location } from "@angular/common";
import { Component } from "@angular/core";
import {  Router } from "@angular/router";

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})

export class Notfound {
    constructor(private location: Location,private router:Router) {}

  goBack(): void {
    this.location.back();
  }
  goHome(){
    this.router.navigate(['home'])
  }
}