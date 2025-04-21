import { Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']

})

export class ProductComponent {

    
    @ViewChild('scrollContainer') scrollContainer!: ElementRef;
    isOverflowing: boolean = false;
    productName: string | null = null;
    constructor(private route:ActivatedRoute){
        this.route.params.subscribe(params => {
            this.productName = params['name'];  
        });     
    }





    ngAfterViewInit(): void {
        const el = this.scrollContainer.nativeElement;
        this.isOverflowing = el.scrollWidth > el.clientWidth;
    }

    images: string[] = [
        '/assets/images/windows/window1.jpeg',
        '/assets/images/windows/window2.jpeg',
        '/assets/images/windows/window3.jpeg',
        '/assets/images/windows/window6.jpeg',
        '/assets/images/windows/window18.jpeg',
        '/assets/images/windows/window1.jpeg',
        '/assets/images/windows/window2.jpeg',
        '/assets/images/windows/window3.jpeg',
        '/assets/images/windows/window6.jpeg',
        '/assets/images/windows/window18.jpeg',
      ];
    
     // Currently selected image index
  selectedIndex = 0;
  
 
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  
  // Reset view when changing images

  

}