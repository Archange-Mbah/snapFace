import { Component,Input } from '@angular/core';
import { FaceSnap } from './model/face-snap';
import { NgStyle, NgClass,UpperCasePipe, TitleCasePipe, LowerCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';


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
  constructor(private router: Router){
    
  }
 onView(){
    this.router.navigateByUrl('facesnaps/'+this.faceSnap.id);
    console.log(this.faceSnap.id);
  }
 
    
}
