import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn angular anhnt';
  displayedColumns = ['position', 'name', 'mail'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  name: string;
  position: string;
  mail: string;
}

const data: Element[] = [
  {position: 'dev', name: 'Hydrogen', mail: 'abc@abc'},
  {position: 'dev', name: 'Hydrogen', mail: 'abc@abc'},
  {position: 'dev', name: 'Hydrogen', mail: 'abc@abc'},

];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
