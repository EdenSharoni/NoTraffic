import { Component } from '@angular/core';
import { Point, Zone } from './models/zone.interface';
import { Store } from '@ngrx/store';
import { getStatus, getZones } from './state/zone.selector';
import { addZone, deleteZone, loadZones } from './state/zone.actions';
import { Status } from './state/zone.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public zones$ = this.store.select(getZones);
  public status$ = this.store.select(getStatus);
  public Status = Status;
  public selectedZone: Zone | null = null;
  public addingNewZone: boolean = false;
  public points: Point[] = [];

  constructor(private store: Store) {
    this.store.dispatch(loadZones());
  }

  // get click coordinates
  public getCoordinates(event: MouseEvent) {
    if (!this.addingNewZone) return;
    this.points.push([event.clientX / 10, event.clientY / 10]);
  }

  // Adding new zone
  public onAddZoneHandler(zone: Zone) {
    this.store.dispatch(addZone({ zone: zone }));
    this.onReset();
  }

  // deleting existing zone
  public onDeleteHandler(zone: Zone) {
    this.store.dispatch(deleteZone({ zone: zone }));
    this.selectedZone = null;
  }

  // reset
  public onReset() {
    this.addingNewZone = !this.addingNewZone;
    this.selectedZone = null;
    this.points = [];
  }
}
