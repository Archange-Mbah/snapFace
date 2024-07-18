import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent  implements OnInit {
isLoading:boolean=true;
imageUrl="https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg"


  ngOnInit(): void {
    // Simulate a delay to show the loader (e.g., waiting for content to load)
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Adjust the delay as needed
  }
}



