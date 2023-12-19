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
