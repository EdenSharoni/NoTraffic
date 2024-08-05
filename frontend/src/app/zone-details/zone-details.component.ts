import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Zone } from '../models/zone.interface';
import { Store } from '@ngrx/store';
import * as ZoneActions from '../state/zone.actions';
@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.scss'],
})
export class ZoneDetailsComponent implements OnInit, OnDestroy {
  @Input() selectedZone?: Zone | null = null;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public deleteZone() {
    if (!this.selectedZone) return;
    if (!this.selectedZone.id) return;
    this.store.dispatch(new ZoneActions.DeleteZone(this.selectedZone.id));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ZoneActions.SelectZoneID(null));
  }
}
