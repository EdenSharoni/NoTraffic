import { createAction, props } from '@ngrx/store';
import { Zone } from '../models/zone.interface';

const LOAD_ZONES_ACTION = '[zones page] load zones';
const LOAD_ZONES_SUCCESS_ACTION = '[zones page] load zone success';
const LOAD_ZONES_FAILURE_ACTION = '[zones page] load zone failure';

const ADD_ZONE_ACTION = '[zones page] add zone';
const ADD_ZONE_SUCCESS_ACTION = '[zones page] add zone success';
const ADD_ZONE_FAILURE_ACTION = '[zones page] add zone failure';

const DELETE_ZONE_ACTION = '[zones page] delete zone';
const DELETE_ZONE_SUCCESS_ACTION = '[zones page] delete zone success';
const DELETE_ZONE_FAILURE_ACTION = '[zones page] delete zone failure';

// LOADING ZONES
export const loadZones = createAction(LOAD_ZONES_ACTION);
export const loadZonesSuccess = createAction(
  LOAD_ZONES_SUCCESS_ACTION,
  props<{ zones: Zone[] }>()
);
export const loadZonesFailure = createAction(
  LOAD_ZONES_FAILURE_ACTION,
  props<{ error: string }>()
);

// ADDING ZONE
export const addZone = createAction(ADD_ZONE_ACTION, props<{ zone: Zone }>());
export const addZoneSuccess = createAction(
  ADD_ZONE_SUCCESS_ACTION,
  props<{ zone: Zone }>()
);
export const addZoneFailure = createAction(
  ADD_ZONE_FAILURE_ACTION,
  props<{ error: string }>()
);

// DELETING ZONE
export const deleteZone = createAction(
  DELETE_ZONE_ACTION,
  props<{ zone: Zone }>()
);
export const deleteZoneSuccess = createAction(
  DELETE_ZONE_SUCCESS_ACTION,
  props<{ zone: Zone }>()
);
export const deleteZoneFailure = createAction(
  DELETE_ZONE_FAILURE_ACTION,
  props<{ error: string }>()
);
