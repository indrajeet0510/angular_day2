import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent  } from './message/message.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonService } from './shared-services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
