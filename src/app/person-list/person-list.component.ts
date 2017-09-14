import { Component, OnInit } from '@angular/core';
import { IPerson } from '../interfaces/person.interface';
import { PersonService } from '../shared-services/person.service';

@Component({
  selector: 'person-list-cmp',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
  public personList: IPerson[];

  constructor(private personService: PersonService) {
    this.personList = this.personService.getList();
  }

  ngOnInit() {

  }

  public showDetail(person: IPerson) {
    console.log(person);
  }
}
