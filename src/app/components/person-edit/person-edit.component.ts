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
  person: Person = { name: '', age: 0, gender: '', mobile: '' };

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPersonById(id).subscribe(p => {
        if (p) {
          this.person = { ...p };
        } else {
          alert('Person not found');
          this.router.navigate(['/people']);
        }
      });
    }
  }

  updatePerson() {
    if (this.person._id) {
      this.personService.updatePerson(this.person._id, this.person).subscribe({
        next: () => {
          alert('Person updated successfully');
          this.router.navigate(['/people']);
        },
        error: err => alert('Error updating person')
      });
    }
  }
}
