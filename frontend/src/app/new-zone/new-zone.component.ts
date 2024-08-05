import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Point, Zone } from '../models/zone.interface';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ZoneActions from '../state/zone.actions';
import { getPoints } from '../state/zone.selector';

@Component({
  selector: 'app-new-zone',
  templateUrl: './new-zone.component.html',
  styleUrls: ['./new-zone.component.scss'],
})
export class NewZoneComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective') private formDirective!: NgForm;
  public points$ = this.store.select(getPoints);
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.formGroup = this.fb.group({
      zoneName: [null, { validators: [Validators.required] }],
      zonePoints: this.fb.array([], {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
        ],
      }),
    });

    this.points$.subscribe((points) => {
      this.zonePointsFormArray.clear();
      points.forEach((point) =>
        this.zonePointsFormArray.push(this.fb.control(point))
      );

      if (points.length === 0) {
        this.formGroup.reset();
        this.formDirective?.resetForm();
      }
    });
  }

  public removeLastPointFromArray() {
    this.store.dispatch(new ZoneActions.RemoveLastPointFromZone());
  }

  ngOnInit(): void {}

  public addZone() {
    if (!this.zoneName) return;
    const zone = {
      name: this.zoneName,
      points: this.zonePoints,
    } as Zone;
    this.store.dispatch(new ZoneActions.AddZone(zone));
  }

  public get zoneNameControl(): AbstractControl {
    return this.formGroup.get('zoneName')!;
  }

  public get zoneName() {
    return this.zoneNameControl.value as string;
  }

  public set zoneName(value: string | null) {
    this.zoneNameControl.setValue(value, { emitEvent: false });
  }

  public get zonePointsControl(): AbstractControl {
    return this.formGroup.get('zonePoints')!;
  }

  public get zonePointsFormArray(): FormArray {
    return this.zonePointsControl as FormArray;
  }

  public get zonePoints(): Point[] {
    return this.zonePointsFormArray.controls.map((control) => control.value);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ZoneActions.RemoveAllPointsFromArray());
  }
}
