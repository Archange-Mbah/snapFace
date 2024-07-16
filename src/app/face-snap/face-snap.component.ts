import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
 title!:string ;
 description!:string;
 createdAt!:Date;
 snaps!:number;
 imageUrl!:string;
 message!:string;

 ngOnInit(): void {
     this.title="Dragonball Z"; 
     this.description="The best anime ever";
     this.createdAt=new Date();
     this.snaps=0;
     this.imageUrl="https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg";
     this.message="snap";
 }


  Onsnap():void{
    this.snaps=(this.snaps+1)%2;
    if(this.snaps==1){
      this.message="oops unSnap";
    }
    else{
      this.message="snap";
}
  }
}
