import { Component } from '@angular/core';
import teamData from './team.json'

interface Person {
  id: Number,
  name: String,
  work: String,
  img: String
}

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {

  persons: Person[] = teamData
}
