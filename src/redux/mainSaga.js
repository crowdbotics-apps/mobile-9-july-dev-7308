import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView38575Saga from '../features/CalendarView38575/redux/sagas';
import EmailAuth48574Saga from '../features/EmailAuth48574/redux/sagas';
import CalendarView38569Saga from '../features/CalendarView38569/redux/sagas';
import EmailAuth48568Saga from '../features/EmailAuth48568/redux/sagas';
import CalendarView38567Saga from '../features/CalendarView38567/redux/sagas';
import EmailAuth48566Saga from '../features/EmailAuth48566/redux/sagas';
import CalendarView38560Saga from '../features/CalendarView38560/redux/sagas';
import EmailAuth48559Saga from '../features/EmailAuth48559/redux/sagas';
import CalendarView38558Saga from '../features/CalendarView38558/redux/sagas';
import EmailAuth48557Saga from '../features/EmailAuth48557/redux/sagas';
import CalendarView38551Saga from '../features/CalendarView38551/redux/sagas';
import EmailAuth48550Saga from '../features/EmailAuth48550/redux/sagas';
import CalendarView38549Saga from '../features/CalendarView38549/redux/sagas';
import EmailAuth48548Saga from '../features/EmailAuth48548/redux/sagas';
import CalendarView38543Saga from '../features/CalendarView38543/redux/sagas';
import EmailAuth48542Saga from '../features/EmailAuth48542/redux/sagas';
import CalendarView38541Saga from '../features/CalendarView38541/redux/sagas';
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
CalendarView38575Saga,
EmailAuth48574Saga,
CalendarView38569Saga,
EmailAuth48568Saga,
CalendarView38567Saga,
EmailAuth48566Saga,
CalendarView38560Saga,
EmailAuth48559Saga,
CalendarView38558Saga,
EmailAuth48557Saga,
CalendarView38551Saga,
EmailAuth48550Saga,
CalendarView38549Saga,
EmailAuth48548Saga,
CalendarView38543Saga,
EmailAuth48542Saga,
CalendarView38541Saga,
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