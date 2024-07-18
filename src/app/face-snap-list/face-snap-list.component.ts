import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../face-snap/model/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';


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
  constructor(private faceSnapsService:FaceSnapsService){}
 

  ngOnInit():void{
    this.faceSnaps=this.faceSnapsService.getFaceSnaps();
}
}
