import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSelectedZone, getStatus } from './state/zone.selector';
import * as ZoneActions from './state/zone.actions';
import { Status } from './state/zone.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public status$ = this.store.select(getStatus);
  public Status = Status;
  public selectedZone$ = this.store.select(getSelectedZone);

  public addingNewZone: boolean = false;

  constructor(private store: Store) {
    this.store.dispatch(new ZoneActions.LoadZones());
  }
}
