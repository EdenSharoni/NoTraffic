import * as ZoneAction from './zone.actions';
import { Status, zonesAdapter, initialState, ZoneState } from './zone.state';

export function zoneReducer(
  state = initialState,
  action: ZoneAction.Actions
): ZoneState {
  switch (action.type) {
    case ZoneAction.ZoneActionTypes.LOAD_ZONES:
      return zonesAdapter.setAll([], {
        ...state,
        status: Status.loading,
        error: null,
      });

    case ZoneAction.ZoneActionTypes.LOAD_ZONES_SUCCESS:
      return zonesAdapter.setAll(action.payload, {
        ...state,
        status: Status.success,
        error: null,
      });

    case ZoneAction.ZoneActionTypes.LOAD_ZONES_FAILURE:
      return zonesAdapter.setAll([], {
        ...state,
        status: Status.failure,
        error: <any>action.payload,
      });

    case ZoneAction.ZoneActionTypes.ADD_ZONE_SUCCESS:
      return zonesAdapter.addOne(action.payload, { ...state, points: [] });

    case ZoneAction.ZoneActionTypes.ADD_ZONE_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: Status.failure,
      };

    case ZoneAction.ZoneActionTypes.DELETE_ZONE_SUCCESS:
      return zonesAdapter.removeOne(action.payload, state);

    case ZoneAction.ZoneActionTypes.DELETE_ZONE_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: Status.failure,
      };

    case ZoneAction.ZoneActionTypes.SELECT_ZONE_ID:
      return {
        ...state,
        selectedZoneID: action.payload,
      };

    case ZoneAction.ZoneActionTypes.ADD_POINT_TO_ZONE:
      var points = [...state.points];
      if (points.length < 4) {
        points.push(action.payload);
      }
      return {
        ...state,
        points: points,
      };
    case ZoneAction.ZoneActionTypes.REMOVE_LAST_POINT_FROM_ZONE:
      var points = [...state.points];
      points.pop();
      return {
        ...state,
        points: points,
      };
    case ZoneAction.ZoneActionTypes.REMOVE_ALL_POINT_FROM_ZONE:
      return {
        ...state,
        points: [],
      };
    default:
      return { ...state };
  }
}
