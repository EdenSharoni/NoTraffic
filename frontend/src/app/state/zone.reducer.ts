import { createReducer, on } from '@ngrx/store';
import {
  addZoneSuccess,
  deleteZoneFailure,
  deleteZoneSuccess,
  loadZones,
  loadZonesFailure,
  loadZonesSuccess,
} from './zone.actions';
import { Status, zonesAdapter, initialState } from './zone.state';
import { Zone } from '../models/zone.interface';

export const zoneReducer = createReducer(
  initialState,
  on(loadZones, (state) => {
    return zonesAdapter.setAll([], {
      ...state,
      status: Status.loading,
      error: null,
    });
  }),
  on(loadZonesSuccess, (state, action) => {
    return zonesAdapter.setAll(action.zones, {
      ...state,
      status: Status.success,
      error: null,
    });
  }),
  on(loadZonesFailure, (state, action) => {
    return zonesAdapter.setAll([], {
      ...state,
      status: Status.failure,
      error: <any>action.error,
    });
  }),
  on(addZoneSuccess, (state, action) => {
    const zoneToAdd: Zone = { ...action.zone };
    return zonesAdapter.addOne(zoneToAdd, state);
  }),
  on(deleteZoneSuccess, (state, action) => {
    return zonesAdapter.removeOne(action.zone.id!, state);
  }),
  on(deleteZoneFailure, (state, action) => {
    return { ...state, error: action.error as any };
  })
);
