import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth48540Saga from '../features/EmailAuth48540/redux/sagas';
import CalendarView38534Saga from '../features/CalendarView38534/redux/sagas';
import EmailAuth48533Saga from '../features/EmailAuth48533/redux/sagas';
import CalendarView38532Saga from '../features/CalendarView38532/redux/sagas';
import EmailAuth48531Saga from '../features/EmailAuth48531/redux/sagas';
import CalendarView38525Saga from '../features/CalendarView38525/redux/sagas';
import EmailAuth48524Saga from '../features/EmailAuth48524/redux/sagas';
import CalendarView38523Saga from '../features/CalendarView38523/redux/sagas';
import EmailAuth48522Saga from '../features/EmailAuth48522/redux/sagas';
import CalendarView38516Saga from '../features/CalendarView38516/redux/sagas';
import EmailAuth48515Saga from '../features/EmailAuth48515/redux/sagas';
import CalendarView38514Saga from '../features/CalendarView38514/redux/sagas';
import EmailAuth48513Saga from '../features/EmailAuth48513/redux/sagas';
import CalendarView38507Saga from '../features/CalendarView38507/redux/sagas';
import EmailAuth48506Saga from '../features/EmailAuth48506/redux/sagas';
import CalendarView38505Saga from '../features/CalendarView38505/redux/sagas';
import EmailAuth48504Saga from '../features/EmailAuth48504/redux/sagas';
import CalendarView38496Saga from '../features/CalendarView38496/redux/sagas';
import EmailAuth48495Saga from '../features/EmailAuth48495/redux/sagas';
import CalendarView38494Saga from '../features/CalendarView38494/redux/sagas';
import EmailAuth48493Saga from '../features/EmailAuth48493/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth48540Saga,
CalendarView38534Saga,
EmailAuth48533Saga,
CalendarView38532Saga,
EmailAuth48531Saga,
CalendarView38525Saga,
EmailAuth48524Saga,
CalendarView38523Saga,
EmailAuth48522Saga,
CalendarView38516Saga,
EmailAuth48515Saga,
CalendarView38514Saga,
EmailAuth48513Saga,
CalendarView38507Saga,
EmailAuth48506Saga,
CalendarView38505Saga,
EmailAuth48504Saga,
CalendarView38496Saga,
EmailAuth48495Saga,
CalendarView38494Saga,
EmailAuth48493Saga,
    
  ]);
}