import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
CalendarView38505Saga,
EmailAuth48504Saga,
CalendarView38496Saga,
EmailAuth48495Saga,
CalendarView38494Saga,
EmailAuth48493Saga,
    
  ]);
}