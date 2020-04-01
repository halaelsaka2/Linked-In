import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './features/profile/profile.component';
import { OthersProfileComponent } from './features/others-profile/others-profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { RouterModule } from '@angular/router';
import { UserSrevice } from './users.services';
import { AddPostComponent } from './features/home/add-post/add-post.component';
import { PostsService } from 'src/app/post.services';
import { PostComponent } from './features/home/post/post.component';
// import { PostComponent } from './src/features/home/post/post.component';



const appRoutes = [
  { path: "", redirectTo: "home/1", pathMatch: "full" },
  { path: "home/:id", component: HomeComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "others-profile/:id", component: OthersProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    AddPostComponent,
    OthersProfileComponent,


    PostComponent,
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
