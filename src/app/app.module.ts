import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './features/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { RouterModule } from '@angular/router';
import { Users } from './users.services';
import { Posts } from './post.services';


const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent }
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
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [Users, Posts],
  bootstrap: [AppComponent]
})
export class AppModule { }
