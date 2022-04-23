import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './first/home/home.component';
import { MessagesComponent } from './first/messages/messages.component';
import { ProfileComponent } from './first/profile/profile.component';
import { SettingsComponent } from './first/settings/settings.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent ,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'messages', component: MessagesComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]},
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent},
  { path: '', redirectTo: 'first', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
