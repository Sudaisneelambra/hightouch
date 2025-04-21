import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router:Router) { }
  
  reviews = [
    {
      name: 'Sidheek Sha',
      review: '“Exceptional aluminum designs, highly recommend!”',
      starCount: 5,
      place: 'Wandoor'
  },
  {
      name: 'albin jhon',
      review: '“Strong, sleek, and beautifully crafted work.”',
      starCount: 4,
      place: 'edavanna'
  },
  {
      name: 'sreeja',
      review: '“Quick and precise aluminum fabrication services.”',
      starCount: 4,
      place: 'nilambur'
  },
  {
      name: 'ravi',
      review: '“Crafting perfect aluminum interiors, every time.”',
      starCount: 5,
      place: 'wandoor'
  },
  {
      name: 'salmath',
      review: '“Top-tier aluminum work for modern spaces.”',
      starCount: 5,
      place: 'koorad'
  }
  ]

  services = [
    {
      serviceName:'curtains',
      description:'Enhance your space with stylish, custom curtains that offer privacy, elegance, and light control.',
      img:'/assets/images/homeimage/curtainhome.jpg',
      colorCode:'#68d585'
    },
    {
      serviceName:'kitchen',
      description:'We design stylish, functional aluminium kitchens with smart storage, durability, and modern finishes.',
      img:'/assets/images/kitchen/kitchen13.jpeg',
      colorCode:'#473bf0'
    },
    {
      serviceName:'showcase',
      description:'Elegant showcases designed for display and storage, adding style to any interior space.',
      img:'/assets/images/homeimage/showcasehome.jpg',
      colorCode:'#f64b4b'
    },
    {
      serviceName:'room',
      description:'We create modern, functional room interiors tailored for comfort, style, and smart living.',
      img:'/assets/images/room/room9.jpeg',
      colorCode:'#f7c948 '
    },
    {
      serviceName:'tvunits',
      description:'Stylish TV units built for durability, smart storage, and a sleek modern look.',
      img:'/assets/images/tvunits/tvunit6.jpeg',
      colorCode:'#38bdf8 '
    },
    {
      serviceName:'washbasin',
      description:'Design a stylish washbasin space with ease. Create a functional, elegant layout that suits your style and practical needs.',
      img:'/assets/images/washbasin/washbasin11.jpeg',
      colorCode:'#c084fc'
    },
    {
      serviceName:'windows',
      description:'Durable aluminium windows designed for style, ventilation, security, and long-lasting performance in every space.',
      img:'/assets/images/homeimage/windowhome.jpg',
      colorCode:'#10b981'
    },
  ]


  gotToService(serviceName:any){
    this.router.navigate([`products/${serviceName}`])
  }

}
