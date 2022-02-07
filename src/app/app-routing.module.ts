import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: 'event', component: EventsComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/homepage', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
