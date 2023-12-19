import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subjects } from 'src/app/Services/subjects.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private router:Router){
  }

isActive(route: string): boolean {
  return this.router.isActive(route, true);
}
}
