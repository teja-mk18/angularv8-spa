import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people: Person[] = [
    { id: 1, name: 'Alice', age: 25, gender: 'Female', mobile: '1234567890' },
    { id: 2, name: 'Bob', age: 30, gender: 'Male', mobile: '9876543210' },
    { id: 3, name: 'Charlie', age: 22, gender: 'Male', mobile: '5555555555' }
  ];

  getPeople(): Observable<Person[]> {
    return of(this.people);
  }

  getPersonById(id: number): Observable<Person | undefined> {
    return of(this.people.find(p => p.id === id));
  }
  addPerson(person: Person): void {
    const newId = this.people.length > 0 ? Math.max(...this.people.map(p => p.id)) + 1 : 1;
    this.people.push({ ...person, id: newId });
  }

  updatePerson(person: Person): void {
    const index = this.people.findIndex(p => p.id === person.id);
    if (index !== -1) {
      this.people[index] = person;
    }
  }

  deletePerson(id: number): void {
    this.people = this.people.filter(p => p.id !== id);
  }
}
