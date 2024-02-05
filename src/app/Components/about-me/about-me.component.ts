import { Component, OnInit } from '@angular/core';
import { Subjects } from 'src/app/Services/subjects.service';
import * as L from 'leaflet';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{
  bg!:string
socialArray:any[]=
[
  {link:'https://www.facebook.com/profile.php?id=100007685357492',
image:'assets/contatti-images/facebook.png'},
{link:'https://www.instagram.com/raffaelecaravetta/',
image:'assets/contatti-images/instagram.jpg'},
 {link:'https://www.linkedin.com/in/raffaele-caravetta-webdeveloper/',
image:'assets/contatti-images/linkedin.png'},
{link:'https://wa.me/+393774029476',
image:'assets/contatti-images/whatsapp.png'},
{link:'mailto:raffaelecaravetta13@gmail.com',
image:'assets/contatti-images/gmail.png'},
]
  constructor(private subjectService:Subjects){
  subjectService.themeSubject.subscribe((data:string)=>{
    this.bg=data
  })
  }
  ngOnInit(): void {
    const map =  L.map('map').setView([39.2970, 16.2500], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const marker = L.marker([39.2970, 16.2500]).addTo(map);
    marker.bindPopup("I'm here!").openPopup();
  }



}
