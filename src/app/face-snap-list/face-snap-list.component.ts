import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../face-snap/model/face-snap';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent  implements OnInit {
  title = 'snapFace';
  faceSnaps:FaceSnap[]=[];
 

  ngOnInit():void{
    this.faceSnaps=[
    new FaceSnap("Dragonball Z","The best anime ever",new Date(),210,"https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg","snap",false),
   new FaceSnap("Naruto","The best anime ever",new Date(),0,"https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg","snap",false)
    ];
    this.faceSnaps[1].setLocation("Nigeria");
}
}
