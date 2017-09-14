import { Component, OnInit } from '@angular/core';
import { IPerson } from '../interfaces/person.interface';

@Component({
  selector: 'person-detail-cmp',
  templateUrl: './person-detail.component.html',
})
export class PersonDetailComponent implements OnInit {
  public person: IPerson;

  ngOnInit() {

  }
}
