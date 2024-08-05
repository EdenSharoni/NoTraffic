import { Component, Input, OnInit } from '@angular/core';
import { Zone } from '../models/zone.interface';
import { Store } from '@ngrx/store';
import * as ZoneActions from '../state/zone.actions';
import { getPoints, getZones } from '../state/zone.selector';

@Component({
  selector: 'app-zones-overview',
  templateUrl: './zones-overview.component.html',
  styleUrls: ['./zones-overview.component.scss'],
})
export class ZonesOverviewComponent implements OnInit {
  public zones$ = this.store.select(getZones);
  @Input() editMode: boolean = false;

  public points$ = this.store.select(getPoints);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public zoneSelected(zone: Zone) {
    if (this.editMode) return;
    if (!zone.id) return;
    this.store.dispatch(new ZoneActions.SelectZoneID(zone.id));
  }

  public getCoordinates(event: MouseEvent) {
    if (!this.editMode) return;
    this.store.dispatch(
      new ZoneActions.AddPointToZone([event.clientX / 10, event.clientY / 10])
    );
  }
}
