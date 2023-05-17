import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  isSubmitted = false

  forms: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forms = this.fb.group({
      modelo:["", Validators.required],
      recogidaLocacion:["", Validators.required],
      entregaLocacion:["", Validators.required],
      recogidaFecha:["", Validators.required],
      entregaFecha:["", Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  sacarReserva(){
    this.isSubmitted = true
  }
}
