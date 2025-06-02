import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService} from '../../services/person.service';
import { Person } from '../../person.model';


@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  person: Person | undefined;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.personService.getPersonById(id).subscribe(p => {
    if (p) {
      this.person = p;
    } else {
      alert('Person not found');
      this.router.navigate(['/']);
    }
  });
}


  deletePerson() {
    if (this.person) {
      this.personService.deletePerson(this.person.id);
      alert('Person deleted successfully');
      this.router.navigate(['/']);
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
