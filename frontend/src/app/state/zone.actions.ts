import { Action } from '@ngrx/store';
import { Point, Zone } from '../models/zone.interface';

export enum ZoneActionTypes {
  LOAD_ZONES = '[zones page] load zones',
  LOAD_ZONES_SUCCESS = '[zones page] load zone success',
  LOAD_ZONES_FAILURE = '[zones page] load zone failure',

  ADD_ZONE = '[zones page] add zone',
  ADD_ZONE_SUCCESS = '[zones page] add zone success',
  ADD_ZONE_FAILURE = '[zones page] add zone failure',

  DELETE_ZONE = '[zones page] delete zone',
  DELETE_ZONE_SUCCESS = '[zones page] delete zone success',
  DELETE_ZONE_FAILURE = '[zones page] delete zone failure',

  SELECT_ZONE_ID = '[zone page] select zone id',

  ADD_POINT_TO_ZONE = '[zone page] add point to zone',
  REMOVE_LAST_POINT_FROM_ZONE = '[zone page] remove last point from zone',
  REMOVE_ALL_POINT_FROM_ZONE = '[zone page] remove all point from zone',
}

export class LoadZones implements Action {
  readonly type = ZoneActionTypes.LOAD_ZONES;
}

export class LoadZonesSuccess implements Action {
  readonly type = ZoneActionTypes.LOAD_ZONES_SUCCESS;
  constructor(public payload: Zone[]) {}
}

export class LoadZonesFailure implements Action {
  readonly type = ZoneActionTypes.LOAD_ZONES_FAILURE;
  constructor(public payload: string) {}
}

export class AddZone implements Action {
  readonly type = ZoneActionTypes.ADD_ZONE;
  constructor(public zone: Zone) {}
}

export class AddZoneSuccess implements Action {
  readonly type = ZoneActionTypes.ADD_ZONE_SUCCESS;
  constructor(public payload: Zone) {}
}

export class AddZoneFailure implements Action {
  readonly type = ZoneActionTypes.ADD_ZONE_FAILURE;
  constructor(public payload: string) {}
}

export class DeleteZone implements Action {
  readonly type = ZoneActionTypes.DELETE_ZONE;
  constructor(public payload: number) {}
}

export class DeleteZoneSuccess implements Action {
  readonly type = ZoneActionTypes.DELETE_ZONE_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteZoneFailure implements Action {
  readonly type = ZoneActionTypes.DELETE_ZONE_FAILURE;
  constructor(public payload: string) {}
}

export class SelectZoneID implements Action {
  readonly type = ZoneActionTypes.SELECT_ZONE_ID;
  constructor(public payload: number | null) {}
}

export class AddPointToZone implements Action {
  readonly type = ZoneActionTypes.ADD_POINT_TO_ZONE;
  constructor(public payload: Point) {}
}

export class RemoveLastPointFromZone implements Action {
  readonly type = ZoneActionTypes.REMOVE_LAST_POINT_FROM_ZONE;
}

export class RemoveAllPointsFromArray implements Action {
  readonly type = ZoneActionTypes.REMOVE_ALL_POINT_FROM_ZONE;
}

export type Actions =
  | LoadZones
  | LoadZonesSuccess
  | LoadZonesFailure
  | AddZone
  | AddZoneSuccess
  | AddZoneFailure
  | DeleteZone
  | DeleteZoneSuccess
  | DeleteZoneFailure
  | SelectZoneID
  | AddPointToZone
  | RemoveLastPointFromZone
  | RemoveAllPointsFromArray;
