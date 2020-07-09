import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
CalendarView38494Saga,
EmailAuth48493Saga,
    
  ]);
}