import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Point, Zone } from '../models/zone.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-zone',
  templateUrl: './new-zone.component.html',
  styleUrls: ['./new-zone.component.scss'],
})
export class NewZoneComponent implements OnInit {
  @Output() addNewZoneHandler = new EventEmitter<Zone>();
  public zoneNameControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  @Input() public points: Point[] = [];

  constructor() {
    this.zoneNameControl.valueChanges.subscribe((value) => {
      if (value) this.zoneName = value.trim();
    });
  }

  ngOnInit(): void {}

  public addZone() {
    if (!this.zoneName) return;
    const zone = {
      name: this.zoneName,
      points: this.points,
    } as Zone;
    this.addNewZoneHandler.emit(zone);
  }

  public get zoneName() {
    return this.zoneNameControl.value as string;
  }
  public set zoneName(value: string | null) {
    this.zoneNameControl.setValue(value, { emitEvent: false });
  }
}
