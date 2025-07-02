import { ChangeDetectorRef, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { curtain, kitchen, room, walldrops, tvunit, washbasin, windows, frpdoors ,ceilinggypsum,cupboards,partition,bedroom} from "src/app/datas/data";

@Component({
    selector: 'app-single-product',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {


  productName: string | null = null;
  images!: { url: string }[];

  



  selectedImageIndex: number = 0;
  imageLoaded: boolean = false;
  thumbnailsLoaded: boolean[] = [];
  
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private autoSlideInterval: any;
  private isAutoSliding: boolean = false;

  constructor(private route: ActivatedRoute,private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    // Initialize thumbnails loaded state
    this.route.params.subscribe((params) => {
      const productNames = params['name'];
      this.loadImages(productNames)
    });
    this.thumbnailsLoaded = new Array(this.images.length).fill(false);
    
    // Preload first image
    this.preloadImage(this.selectedImage);
    
    // Start auto-slide after 5 seconds of inactivity
    this.resetAutoSlide();
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
        case 'room':
            this.images = room;
            this.productName = 'Bed Room';
            break;
        case 'walldrops':
            this.images = walldrops;
            this.productName = 'Wall Drops';
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
        case 'frpdoors':
            this.images = frpdoors;
            this.productName = 'FRP Doors';
            break;
        case 'ceilinggypsum':
          this.images = ceilinggypsum;
          this.productName = 'Ceiling Gypsum';
          break;
        case 'cupboards':
          this.images = cupboards;
          this.productName = 'Cup Boards';
          break;
        case 'partitions':
          this.images = partition;
          this.productName = 'Partition';
          break;
        case 'bedroom':
          this.images = bedroom;
          this.productName = 'Bed Room';
          break;
        default:
          this.images = [];
      }
    }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  };

  selectImage(index: number): void {
    if (index === this.selectedImageIndex) return;
    
    this.imageLoaded = false;
    this.selectedImageIndex = index;
    this.preloadImage(this.selectedImage);
    this.scrollToThumbnail(index);
    this.resetAutoSlide();
  }

  get selectedImage(): string {
    return this.images[this.selectedImageIndex].url;
  }

  previousImage(): void {
    const newIndex = this.selectedImageIndex > 0 ? this.selectedImageIndex - 1 : this.images.length - 1;
    this.selectImage(newIndex);
  }

  nextImage(): void {
    const newIndex = this.selectedImageIndex < this.images.length - 1 ? this.selectedImageIndex + 1 : 0;
    this.selectImage(newIndex);
  }

  onImageLoad(): void {
    this.imageLoaded = true;
    // Preload next and previous images for smoother experience
    this.preloadAdjacentImages();
  }

  onThumbnailLoad(index: number): void {
    this.thumbnailsLoaded[index] = true;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.pauseAutoSlide();
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
    this.resetAutoSlide();
  }

  private handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextImage(); // Swipe left - next image
      } else {
        this.previousImage(); // Swipe right - previous image
      }
    }
  }

  private scrollToThumbnail(index: number): void {
    setTimeout(() => {
      const thumbnail = document.querySelector(`[data-thumbnail-index="${index}"]`);
      if (thumbnail) {
        thumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }, 100);
  }

  private preloadImage(src: string): void {
    const img = new Image();
    img.onload = () => {
      if (src === this.selectedImage) {
        this.onImageLoad();
      }
    };
    img.src = src;
  }

  private preloadAdjacentImages(): void {
    // Preload next image
    const nextIndex = this.selectedImageIndex < this.images.length - 1 ? this.selectedImageIndex + 1 : 0;
    const nextImg = new Image();
    nextImg.src = this.images[nextIndex].url;

    // Preload previous image
    const prevIndex = this.selectedImageIndex > 0 ? this.selectedImageIndex - 1 : this.images.length - 1;
    const prevImg = new Image();
    prevImg.src = this.images[prevIndex].url;
  }

  private resetAutoSlide(): void {
    this.pauseAutoSlide();
    this.autoSlideInterval = setTimeout(() => {
      this.startAutoSlide();
    }, 5000); // Start auto-slide after 5 seconds of inactivity
  }

  private startAutoSlide(): void {
    if (this.isAutoSliding) return;
    
    this.isAutoSliding = true;
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 4000); // Change image every 4 seconds
  }

  private pauseAutoSlide(): void {
    this.isAutoSliding = false;
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previousImage();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextImage();
    } else if (event.key === 'Escape') {
      this.pauseAutoSlide();
    } else if (event.key === ' ') {
      event.preventDefault();
      if (this.isAutoSliding) {
        this.pauseAutoSlide();
      } else {
        this.resetAutoSlide();
      }
    }
  }

  @HostListener('window:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) {
      this.pauseAutoSlide();
    } else {
      this.resetAutoSlide();
    }
  }

  @HostListener('mouseover')
  onMouseOver(): void {
    this.pauseAutoSlide();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.resetAutoSlide();
  }
}