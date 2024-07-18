import { SnapType } from "../snap-type.type";

export class FaceSnap{
    location?:string;
    id:string;

   constructor(public title:string,
                public description:string,
                public createdAt:Date,
                public snaps:number,
                public imageUrl:string,
                public message:string,
                public userHasClicked:boolean){
    this.id=crypto.randomUUID().substring(0,7);

   }

   snap(snapType:SnapType):void{
    if(snapType==='snap'){
        this.addSnap();
    }
    else if(snapType==='unsnap'){
        this.removeSnap();
    
  }

}
  setLocation(location:string):void{
    this.location=location;

}
addSnap():void{
  this.snaps++;
}
removeSnap():void{
  this.snaps--; 
}
}
