import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../person.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent {
  person: Person = {
    id: 0,
    name: '',
    age: 0,
    gender: 'Male',
    mobile: ''
  };

  constructor(private personService: PersonService, private router: Router) {}

  createPerson() {
    this.person.id = new Date().getTime(); // temporary ID
    this.personService.addPerson(this.person);
    this.router.navigate(['/people']);
  }
}
