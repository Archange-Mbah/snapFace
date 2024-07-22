import { Component,Input } from '@angular/core';
import { FaceSnap } from './model/face-snap';
import { NgStyle, NgClass,UpperCasePipe, TitleCasePipe, LowerCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-face-snap-c',
  standalone: true,
  imports: [NgStyle,
           NgClass, 
           UpperCasePipe,
           LowerCasePipe,
           TitleCasePipe,
           RouterLink
          ],
  templateUrl: './face-snap-c.component.html',
  styleUrl: './face-snap-c.component.scss'
})
export class FaceSnapCComponent implements OnInit {
  @Input() faceSnap!:FaceSnap ;
  userHasSnapped:boolean=false;
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute,private route1:Router){}

  ngOnInit(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap=   this.faceSnapsService.getFaceSnapById(faceSnapId)!;
  }

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
