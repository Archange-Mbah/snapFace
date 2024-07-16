import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './face-snap/model/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'snapFace';
  faceSnaps:FaceSnap[]=[];
 ;

  ngOnInit():void{
    this.faceSnaps=[
    new FaceSnap("Dragonball Z","The best anime ever",new Date(),0,"https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg","snap"),
   new FaceSnap("Naruto","The best anime ever",new Date(),0,"https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg","snap")
    ];
    this.faceSnaps[1].setLocation("Nigeria");
  }
  }

