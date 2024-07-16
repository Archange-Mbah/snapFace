export class FaceSnap{
   constructor(public title:string,
                public description:string,
                public createdAt:Date,
                public snaps:number,
                public imageUrl:string,
                public message:string
   ){

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