import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Point, Zone } from '../models/zone.interface';

export enum Status {
  'pending' = 1,
  'loading' = 2,
  'success' = 3,
  'failure' = 4,
}

export interface ZoneState extends EntityState<Zone> {
  selectedZoneID: number | null;
  // newZone: {
  //   zoneName: string;
  //   zonePoints: Point[];
  // } | null;
  points: Point[];
  status: Status;
  error: string | null;
}

export const zonesAdapter: EntityAdapter<Zone> = createEntityAdapter<Zone>();

export const defaultZone: ZoneState = {
  ids: [],
  entities: {},
  selectedZoneID: null,
  points: [],
  // newZone: null,
  status: Status.pending,
  error: null,
};

export const initialState = zonesAdapter.getInitialState(defaultZone);
