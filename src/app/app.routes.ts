import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    {path:'facesnaps', component: FaceSnapListComponent},
    {path:'', component:LandingpageComponent}

];
