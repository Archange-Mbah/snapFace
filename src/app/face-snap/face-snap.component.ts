import { Component,Input } from '@angular/core';
import { FaceSnap } from './model/face-snap';
import { NgStyle, NgClass,UpperCasePipe, TitleCasePipe, LowerCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,
           NgClass, 
           UpperCasePipe,
           LowerCasePipe,
           TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!:FaceSnap;
  userHasSnapped:boolean=false;
  constructor(private faceSnapsService: FaceSnapsService){}

  snap(){
    this.faceSnapsService.snapFaceSnapByid(this.faceSnap.id,'snap');
    this.userHasSnapped=true;
  }
  unsnap(){
    this.faceSnapsService.snapFaceSnapByid(this.faceSnap.id,'unsnap');
    this.userHasSnapped=false;
  }

  OnSnap(){
    if(this.userHasSnapped){
      this.unsnap();
    }
    else{
      this.snap();
    }

  }
    
}
