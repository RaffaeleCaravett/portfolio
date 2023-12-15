import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Subjects } from './Services/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  bg!:string
  constructor(private subjectService:Subjects){
  subjectService.themeSubject.subscribe((data:string)=>{
    this.bg=data
  })
  }
  ngOnInit(): void {
  AOS.init()
  }
  title = 'portfolio';


  mode(string:string){
this.subjectService.setTheme(string)
  }
}
