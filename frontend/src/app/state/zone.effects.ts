import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ZoneActions from './zone.actions';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { ZonesService } from '../services/zones/zones.service';
import { Zone } from '../models/zone.interface';
import { Action } from '@ngrx/store';

@Injectable()
export class ZoneEffects {
  constructor(private actions$: Actions, private zoneService: ZonesService) {}

  public loadZones$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<ZoneActions.LoadZones>(ZoneActions.ZoneActionTypes.LOAD_ZONES),
      mergeMap((action: ZoneActions.LoadZones) =>
        this.zoneService.getZones$().pipe(
          map((zones: Zone[]) => new ZoneActions.LoadZonesSuccess(zones)),
          catchError((e) => of(new ZoneActions.LoadZonesFailure(e.message)))
        )
      )
    )
  );

  public addZone$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<ZoneActions.AddZone>(ZoneActions.ZoneActionTypes.ADD_ZONE),
      mergeMap((action: ZoneActions.AddZone) =>
        this.zoneService.addZone$(action.zone).pipe(
          map((newZone) => new ZoneActions.AddZoneSuccess(newZone)),
          catchError((e) => of(new ZoneActions.AddZoneFailure(e.message)))
        )
      )
    )
  );

  public deleteZone$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<ZoneActions.DeleteZone>(ZoneActions.ZoneActionTypes.DELETE_ZONE),
      mergeMap((action: ZoneActions.DeleteZone) =>
        this.zoneService.deleteZone$(action.payload).pipe(
          map((_) => new ZoneActions.DeleteZoneSuccess(action.payload)),
          catchError((e) => of(new ZoneActions.DeleteZoneFailure(e.message)))
        )
      )
    )
  );
}
