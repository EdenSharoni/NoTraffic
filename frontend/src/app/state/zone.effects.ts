import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addZone,
  addZoneFailure,
  addZoneSuccess,
  deleteZone,
  deleteZoneFailure,
  deleteZoneSuccess,
  loadZones,
  loadZonesFailure,
  loadZonesSuccess,
} from './zone.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ZonesService } from '../services/zones/zones.service';

@Injectable()
export class ZoneEffects {
  constructor(private actions$: Actions, private zoneService: ZonesService) {}

  private loadZones$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadZones),
      switchMap((action) =>
        this.zoneService.getZones$().pipe(
          map((zones) => loadZonesSuccess({ zones: zones })),
          catchError((error) => of(loadZonesFailure({ error: error.message })))
        )
      )
    )
  );

  private addZone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addZone),
      switchMap((action) =>
        this.zoneService.addZone$(action.zone).pipe(
          map((newZone) => addZoneSuccess({ zone: newZone })),
          catchError((error) => of(addZoneFailure({ error: error.message })))
        )
      )
    )
  );

  private deleteZone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteZone),
      switchMap((action) =>
        this.zoneService.deleteZone$(action.zone).pipe(
          map((_) => deleteZoneSuccess({ zone: action.zone })),
          catchError((error) => of(deleteZoneFailure({ error: error.message })))
        )
      )
    )
  );
}
