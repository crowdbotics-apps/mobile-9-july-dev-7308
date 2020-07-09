import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView38621Saga from '../features/CalendarView38621/redux/sagas';
import EmailAuth48620Saga from '../features/EmailAuth48620/redux/sagas';
import CalendarView38619Saga from '../features/CalendarView38619/redux/sagas';
import EmailAuth48618Saga from '../features/EmailAuth48618/redux/sagas';
import CalendarView38612Saga from '../features/CalendarView38612/redux/sagas';
import EmailAuth48611Saga from '../features/EmailAuth48611/redux/sagas';
import CalendarView38610Saga from '../features/CalendarView38610/redux/sagas';
import EmailAuth48609Saga from '../features/EmailAuth48609/redux/sagas';
import CalendarView38603Saga from '../features/CalendarView38603/redux/sagas';
import EmailAuth48602Saga from '../features/EmailAuth48602/redux/sagas';
import CalendarView38601Saga from '../features/CalendarView38601/redux/sagas';
import EmailAuth48600Saga from '../features/EmailAuth48600/redux/sagas';
import CalendarView38595Saga from '../features/CalendarView38595/redux/sagas';
import EmailAuth48594Saga from '../features/EmailAuth48594/redux/sagas';
import CalendarView38593Saga from '../features/CalendarView38593/redux/sagas';
import EmailAuth48592Saga from '../features/EmailAuth48592/redux/sagas';
import CalendarView38586Saga from '../features/CalendarView38586/redux/sagas';
import EmailAuth48585Saga from '../features/EmailAuth48585/redux/sagas';
import CalendarView38584Saga from '../features/CalendarView38584/redux/sagas';
import EmailAuth48583Saga from '../features/EmailAuth48583/redux/sagas';
import CalendarView38577Saga from '../features/CalendarView38577/redux/sagas';
import EmailAuth48576Saga from '../features/EmailAuth48576/redux/sagas';
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
CalendarView38621Saga,
EmailAuth48620Saga,
CalendarView38619Saga,
EmailAuth48618Saga,
CalendarView38612Saga,
EmailAuth48611Saga,
CalendarView38610Saga,
EmailAuth48609Saga,
CalendarView38603Saga,
EmailAuth48602Saga,
CalendarView38601Saga,
EmailAuth48600Saga,
CalendarView38595Saga,
EmailAuth48594Saga,
CalendarView38593Saga,
EmailAuth48592Saga,
CalendarView38586Saga,
EmailAuth48585Saga,
CalendarView38584Saga,
EmailAuth48583Saga,
CalendarView38577Saga,
EmailAuth48576Saga,
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