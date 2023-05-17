import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {

  tab = 0

  tab0() {
    this.tab = 0
    
  }

  tab1() {
    this.tab = 1
  }

  tab2() {
    this.tab = 2
  }

  tab3() {
    this.tab = 3
  }

  tab4() {
    this.tab = 4
  }

  tab5() {
    this.tab = 5
  }

}
