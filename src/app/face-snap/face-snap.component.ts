import { Component,Input, OnInit } from '@angular/core';
import { FaceSnap } from './model/face-snap';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!:FaceSnap;




  
}
