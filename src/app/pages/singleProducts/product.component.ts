import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kitchen,curtain,room,showcase,washbasin,tvunit,windows} from '../../datas/data';    
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  isOverflowing: boolean = false;
  productName: string | null = null;
  images!: { url: string }[];

  constructor(private route: ActivatedRoute,private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        const productNames = params['name'];
        this.loadImages(productNames)
      });
  }

  loadImages(pdName: string | null): void {
    switch (pdName) {
        case 'kitchen':
          this.images = kitchen;
          this.productName = 'Kitchen';
          break;
        case 'curtains':
            this.images = curtain;
            this.productName = 'Curtains';
            break;
        case 'bedroom':
            this.images = room;
            this.productName = 'Bed Room';
            break;
        case 'showcase':
            this.images = showcase;
            this.productName = 'Show Case';
            break;
        case 'washbasin':
            this.images = washbasin;
            this.productName = 'Wash Basin';
            break;
        case 'tvunits':
            this.images = tvunit;
            this.productName = 'TV Unit';
            break;
        case 'windows':
            this.images = windows;
            this.productName = 'Windows';
            break;
        default:
          this.images = [];
      }
  }


 

  ngAfterViewInit(): void {
    const el = this.scrollContainer.nativeElement;
    this.isOverflowing = el.scrollWidth > el.clientWidth;
    this.cdr.detectChanges();
  }

  // Currently selected image index
  selectedIndex = 0;

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  // Reset view when changing images
}
