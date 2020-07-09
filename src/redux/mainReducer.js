import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth48557Reducer from '../features/EmailAuth48557/redux/reducers';
import CalendarView38551Reducer from '../features/CalendarView38551/redux/reducers';
import EmailAuth48550Reducer from '../features/EmailAuth48550/redux/reducers';
import CalendarView38549Reducer from '../features/CalendarView38549/redux/reducers';
import EmailAuth48548Reducer from '../features/EmailAuth48548/redux/reducers';
import CalendarView38543Reducer from '../features/CalendarView38543/redux/reducers';
import EmailAuth48542Reducer from '../features/EmailAuth48542/redux/reducers';
import CalendarView38541Reducer from '../features/CalendarView38541/redux/reducers';
import EmailAuth48540Reducer from '../features/EmailAuth48540/redux/reducers';
import CalendarView38534Reducer from '../features/CalendarView38534/redux/reducers';
import EmailAuth48533Reducer from '../features/EmailAuth48533/redux/reducers';
import CalendarView38532Reducer from '../features/CalendarView38532/redux/reducers';
import EmailAuth48531Reducer from '../features/EmailAuth48531/redux/reducers';
import CalendarView38525Reducer from '../features/CalendarView38525/redux/reducers';
import EmailAuth48524Reducer from '../features/EmailAuth48524/redux/reducers';
import CalendarView38523Reducer from '../features/CalendarView38523/redux/reducers';
import EmailAuth48522Reducer from '../features/EmailAuth48522/redux/reducers';
import CalendarView38516Reducer from '../features/CalendarView38516/redux/reducers';
import EmailAuth48515Reducer from '../features/EmailAuth48515/redux/reducers';
import CalendarView38514Reducer from '../features/CalendarView38514/redux/reducers';
import EmailAuth48513Reducer from '../features/EmailAuth48513/redux/reducers';
import CalendarView38507Reducer from '../features/CalendarView38507/redux/reducers';
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
EmailAuth48557: EmailAuth48557Reducer,
CalendarView38551: CalendarView38551Reducer,
EmailAuth48550: EmailAuth48550Reducer,
CalendarView38549: CalendarView38549Reducer,
EmailAuth48548: EmailAuth48548Reducer,
CalendarView38543: CalendarView38543Reducer,
EmailAuth48542: EmailAuth48542Reducer,
CalendarView38541: CalendarView38541Reducer,
EmailAuth48540: EmailAuth48540Reducer,
CalendarView38534: CalendarView38534Reducer,
EmailAuth48533: EmailAuth48533Reducer,
CalendarView38532: CalendarView38532Reducer,
EmailAuth48531: EmailAuth48531Reducer,
CalendarView38525: CalendarView38525Reducer,
EmailAuth48524: EmailAuth48524Reducer,
CalendarView38523: CalendarView38523Reducer,
EmailAuth48522: EmailAuth48522Reducer,
CalendarView38516: CalendarView38516Reducer,
EmailAuth48515: EmailAuth48515Reducer,
CalendarView38514: CalendarView38514Reducer,
EmailAuth48513: EmailAuth48513Reducer,
CalendarView38507: CalendarView38507Reducer,
EmailAuth48506: EmailAuth48506Reducer,
CalendarView38505: CalendarView38505Reducer,
EmailAuth48504: EmailAuth48504Reducer,
CalendarView38496: CalendarView38496Reducer,
EmailAuth48495: EmailAuth48495Reducer,
CalendarView38494: CalendarView38494Reducer,
EmailAuth48493: EmailAuth48493Reducer,

});