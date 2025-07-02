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
      name: 'albin john',
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
      serviceName:'Bed Room',
      description:'Thoughtfully designed bedrooms that combine comfort, style, and smart storage for a restful living experience.',
      img:'/assets/images/bedroom/bedroom1.jpeg',
      colorCode:'#12348F'
    },    
    {
      serviceName:'Partitions',
      description:'Modern partitions designed to define and separate spaces while maintaining openness and aesthetic flow.',
      img:'/assets/images/partition/partition1.jpeg',
      colorCode:'#98658C'
    },
    {
      serviceName:'walldrops',
      description:'Sleek, space-saving wardrobes designed for organized storage and seamless integration into any interior.',
      img:'/assets/images/walldrops/walldrops6.jpeg',
      colorCode:'#f64b4b'
    },
    {
      serviceName:'Tv Units',
      description:'Stylish TV units built for durability, smart storage, and a sleek modern look.',
      img:'/assets/images/tvunits/tvunit1.jpeg',
      colorCode:'#38bdf8 '
    },
    {
      serviceName:'Wash basin',
      description:'Design a stylish washbasin space with ease. Create a functional, elegant layout that suits your style and practical needs.',
      img:'/assets/images/washbasin/washbasin1.jpeg',
      colorCode:'#c084fc'
    },
    {
      serviceName:'Curtains',
      description:'Enhance your space with stylish, custom curtains that offer privacy, elegance, and light control.',
      img:'/assets/images/curtains/curtain1.jpeg',
      colorCode:'#68d585'
    },
    {
      serviceName:'Kitchen',
      description:'We design stylish, functional aluminium kitchens with smart storage, durability, and modern finishes.',
      img:'/assets/images/kitchen/kitchen5.jpeg',
      colorCode:'#473bf0'
    },
    {
      serviceName:'Room',
      description:'We create modern, functional room interiors tailored for comfort, style, and smart living.',
      img:'/assets/images/room/room9.jpeg',
      colorCode:'#f7c948 '
    },
    {
      serviceName:'Windows',
      description:'Durable aluminium windows designed for style, ventilation, security, and long-lasting performance in every space.',
      img:'/assets/images/homeimage/windowhome.jpg',
      colorCode:'#10b981'
    },
    {
      serviceName:'FRP Doors',
      description:'Durable, weather-resistant FRP doors with modern design and low maintenance.',
      img:'/assets/images/frpdoors/frpdoors2.jpeg',
      colorCode:'#64748B'
    },
    {
      serviceName:'Ceiling Gypsum',
      description:'Elegant, lightweight ceilings with seamless finish, soundproofing, and quick installation.',
      img:'/assets/images/ceilinggypsum/ceilinggypsum2.jpeg',
      colorCode:'#68348C'
    },
    {
      serviceName:'Cup Boards',
      description:'Elegant showcases designed for display and storage, adding style to any interior space.',
      img:'/assets/images/cupboards/cupboard3.jpeg',
      colorCode:'#24648C'
    },
    
  ]


  

  gotToService(serviceName:any){
    const routeName = serviceName.toLowerCase().replace(/\s+/g, '');
    this.router.navigate([`products/${routeName}`])
  }

}
