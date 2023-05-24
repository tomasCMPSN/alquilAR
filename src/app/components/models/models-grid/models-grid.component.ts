import { Component } from '@angular/core';
import carsData from "./modelos.json"

interface Car {
  id: Number,
  name: String,
  brand: String,
  price: Number,
  img: String
}

@Component({
  selector: 'app-models-grid',
  templateUrl: './models-grid.component.html',
  styleUrls: ['./models-grid.component.css']
})
export class ModelsGridComponent {

  cars: Car[] = carsData

}
