import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Zone } from '../models/zone.interface';

export enum Status {
  'pending' = 1,
  'loading' = 2,
  'success' = 3,
  'failure' = 4,
}

export interface ZoneState extends EntityState<Zone> {
  status: Status;
  error: string | null;
}

export const zonesAdapter = createEntityAdapter<Zone>();

export const initialState = zonesAdapter.getInitialState({
  status: Status.pending,
  error: null,
});
