import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ModelsComponent } from './pages/models/models.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "models",
    component: ModelsComponent
  },
  {
    path: "testimonials",
    component: TestimonialsComponent
  },
  {
    path: "our-team",
    component: OurTeamComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: Error404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ModelsComponent,
    Error404Component,
    TestimonialsComponent,
    OurTeamComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
