import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FaceSnapCComponent } from './face-snap-c/face-snap-c.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

export const routes: Routes = [
    {path: 'facesnaps/:id', component:FaceSnapCComponent},
    {path:'facesnaps', component: FaceSnapListComponent},
    {path:'home', component:LandingpageComponent}

];
