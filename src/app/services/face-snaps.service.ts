import { Injectable } from "@angular/core";
import { FaceSnap } from "../face-snap/model/face-snap";
@Injectable({
    providedIn: 'root'
})
export  class FaceSnapsService{
   private  faceSnaps=[
        new FaceSnap("Dragonball Z","The best anime ever",new Date(),210,"https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg","snap",false),
       new FaceSnap("Naruto","The best anime ever",new Date(),0,"https://i.pinimg.com/564x/00/1d/26/001d26c2688e8adadec15487cbf79ad0.jpg","snap",false)
        ];
      

        getFaceSnaps(){
            return [...this.faceSnaps];
        }
}