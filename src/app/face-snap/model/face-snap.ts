export class FaceSnap{
    location?:string;

   constructor(public title:string,
                public description:string,
                public createdAt:Date,
                public snaps:number,
                public imageUrl:string,
                public message:string,
                public userHasClicked:boolean

   ){

   }
   Onsnap():void{
    this.snaps=(this.snaps+1)%5;
    if(this.snaps>0){
      this.message="oops unSnap";
      this.userHasClicked=true;
    }
    else{
      this.message="snap";
      this.userHasClicked=false;
}
  }

  setLocation(location:string):void{
    this.location=location;

}
}