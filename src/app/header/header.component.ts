import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   isDisabled:boolean=false;

   constructor(private router:Router){}

   onHome(){
    this.router.navigateByUrl('home');
   }
   
}
