import { Component } from '@angular/core';
import { Subjects } from 'src/app/Services/subjects.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  bg!:string
  constructor(private subjectService:Subjects){
  subjectService.themeSubject.subscribe((data:string)=>{
    this.bg=data
  })
  }
}
