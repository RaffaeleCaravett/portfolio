import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Subjects {
   themeSubject = new BehaviorSubject<string>(localStorage.getItem('mode')||'light');


  setTheme(theme: string) {
    this.themeSubject.next(theme);
    localStorage.setItem('mode', theme);
  }
}
