import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [


  {path:'Users' , component:UsersComponent},
  {path:'album', component:AlbumsComponent},  
  {path:"photos", component:PhotosComponent},
  {path:"" , component:UsersComponent},
  {path:"**",component:PageNotFoundComponent}

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

   

}
