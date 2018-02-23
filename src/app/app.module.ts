import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes : Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'CV', component: CvComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
