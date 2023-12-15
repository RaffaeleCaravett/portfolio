import { Component } from '@angular/core';
import { Subjects } from 'src/app/Services/subjects.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  bg!:string
  constructor(private subjectService:Subjects){
  subjectService.themeSubject.subscribe((data:string)=>{
    this.bg=data
  })
  }
}
