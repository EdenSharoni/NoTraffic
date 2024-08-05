import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ZoneState, zonesAdapter } from './zone.state';

export const ZONES_SELECTOR_NAME = 'zones';

const getZoneFeatuerSelector =
  createFeatureSelector<ZoneState>(ZONES_SELECTOR_NAME);

// get all zones selector
export const getZones = createSelector(
  getZoneFeatuerSelector,
  zonesAdapter.getSelectors().selectAll
);

// get state selector
export const getStatus = createSelector(getZoneFeatuerSelector, (state) => {
  return state.status;
});

// get error message selector
export const getErrorMessage = createSelector(
  getZoneFeatuerSelector,
  (state) => {
    return state.error;
  }
);

// // get points
export const getPoints = createSelector(getZoneFeatuerSelector, (state) => {
  return state.points;
});

export const getSelectedZoneID = createSelector(
  getZoneFeatuerSelector,
  (state) => {
    state.selectedZoneID;
  }
);

export const getSelectedZone = createSelector(
  getZoneFeatuerSelector,
  getSelectedZoneID,
  (state) => {
    return state.selectedZoneID ? state.entities[state.selectedZoneID] : null;
  }
);
