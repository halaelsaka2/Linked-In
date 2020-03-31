import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './features/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { UserSrevice } from './users.services';
import { PostService } from './post.services';
=======
import {  UserSrevice } from './users.services';
import { AddPostComponent } from './features/home/add-post/add-post.component';
import { PostsService } from 'src/app/post.services';

>>>>>>> 4980a9ca2d75b0bf24ad253c6554d81ec69f7fa0


const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "profile/:id", component: ProfileComponent }
<<<<<<< HEAD
=======

>>>>>>> 4980a9ca2d75b0bf24ad253c6554d81ec69f7fa0
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    AddPostComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [UserSrevice, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
