import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './features/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { RouterModule } from '@angular/router';


const appRoutes=[
{path:"" , component:HomeComponent},
{path:"home", component:HomeComponent},
{path:"profile" , component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
