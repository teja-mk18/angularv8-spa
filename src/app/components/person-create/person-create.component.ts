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
    name: '',
    age: 0,
    gender: 'Male',
    mobile: ''
  };

  constructor(private personService: PersonService, private router: Router) {}

  createPerson() {
    this.personService.addPerson(this.person).subscribe({
      next: () => this.router.navigate(['/people']),
      error: err => console.error('Error creating person:', err)
    });
  }
}
