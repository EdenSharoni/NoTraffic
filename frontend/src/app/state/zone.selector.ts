import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ZoneState, zonesAdapter } from './zone.state';

export const ZONES_SELECTOR_NAME = 'zones';

const getZoneState = createFeatureSelector<ZoneState>(ZONES_SELECTOR_NAME);
const zonesSelectors = zonesAdapter.getSelectors();

export const getZones = createSelector(getZoneState, zonesSelectors.selectAll);

export const getStatus = createSelector(getZoneState, (state) => {
  return state.status;
});

export const getErrorMessage = createSelector(getZoneState, (state) => {
  return state.error;
});
