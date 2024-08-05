import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Zone } from '../models/zone.interface';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.scss'],
})
export class ZoneDetailsComponent implements OnInit {
  @Output() onDeleteHandler = new EventEmitter<Zone>();
  @Input() zone: Zone | null = null;

  constructor() {}

  ngOnInit(): void {}

  public deleteZone() {
    if (!this.zone) return;
    this.onDeleteHandler.emit(this.zone);
  }
}
