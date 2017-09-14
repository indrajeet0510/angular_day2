import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/person.interface';

@Injectable()
export class PersonService {
  public personList: IPerson[] = [
    { name: 'Person 1', company: 'Deloitte', exp: 3},
    { name: 'Person 2', company: 'HP', exp: 4},
    { name: 'Person 3', company: 'Vmware', exp: 2},
    { name: 'Person 4', company: 'Deloitte Consulting', exp: 8},
  ];

  public getList() {
    return this.personList;
  }
  public set(newPerson: IPerson) {
    this.personList.push(newPerson);
  }
}
