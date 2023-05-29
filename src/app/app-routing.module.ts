import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MembershipComponent } from './membership/membership.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TrainingComponent } from './training/training.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'records', component: RecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
