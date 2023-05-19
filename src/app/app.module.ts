import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
import { PlaneaTuViajeComponent } from './components/home/planea-tu-viaje/planea-tu-viaje.component';
import { ReservarComponent } from './components/home/reservar/reservar.component'
import { RapidoYFacilComponent } from './components/home/rapido-y-facil/rapido-y-facil.component';
import { VehiculosComponent } from './components/home/vehiculos/vehiculos.component';
import { GrisComponent } from './components/home/gris/gris.component';
import { PorQueElegirnosComponent } from './components/home/por-que-elegirnos/por-que-elegirnos.component';
import { TestimoniosComponent } from './components/home/testimonios/testimonios.component';

import { NgIconsModule } from '@ng-icons/core';
import { matCheckCircle, matCarRental, matArrowForwardIos, matDirectionsCar, matCarRepair, matLocationOn, matCalendarMonth, matHeadsetMic, matLocalCarWash, matAttachMoney, matMoneyOff } from '@ng-icons/material-icons/baseline';

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
    PlaneaTuViajeComponent,
    ReservarComponent,
    RapidoYFacilComponent,
    VehiculosComponent,
    GrisComponent,
    PorQueElegirnosComponent,
    TestimoniosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgIconsModule.withIcons({ matCheckCircle, matCarRental, matCarRepair, matArrowForwardIos, matDirectionsCar, matLocationOn, matCalendarMonth, matHeadsetMic, matLocalCarWash, matAttachMoney, matMoneyOff }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
