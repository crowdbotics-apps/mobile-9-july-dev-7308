import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth48506Reducer from '../features/EmailAuth48506/redux/reducers';
import CalendarView38505Reducer from '../features/CalendarView38505/redux/reducers';
import EmailAuth48504Reducer from '../features/EmailAuth48504/redux/reducers';
import CalendarView38496Reducer from '../features/CalendarView38496/redux/reducers';
import EmailAuth48495Reducer from '../features/EmailAuth48495/redux/reducers';
import CalendarView38494Reducer from '../features/CalendarView38494/redux/reducers';
import EmailAuth48493Reducer from '../features/EmailAuth48493/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth48506: EmailAuth48506Reducer,
CalendarView38505: CalendarView38505Reducer,
EmailAuth48504: EmailAuth48504Reducer,
CalendarView38496: CalendarView38496Reducer,
EmailAuth48495: EmailAuth48495Reducer,
CalendarView38494: CalendarView38494Reducer,
EmailAuth48493: EmailAuth48493Reducer,

});