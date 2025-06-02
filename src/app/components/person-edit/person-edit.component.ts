import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../person.model';


@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  person: Person = { id: 0, name: '', age: 0, gender: '', mobile: '' };

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPersonById(id).subscribe(p => {
      if (p) {
        this.person = { ...p };
      } else {
        alert('Person not found');
        this.router.navigate(['/']);
      }
    });
  }

  updatePerson() {
    this.personService.updatePerson(this.person);
    alert('Person updated successfully');
    this.router.navigate(['/']);
  }
}
