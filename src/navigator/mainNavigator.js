import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen18511Navigator from '../features/BlankScreen18511/navigator';
import BlankScreen98510Navigator from '../features/BlankScreen98510/navigator';
import BlankScreen28509Navigator from '../features/BlankScreen28509/navigator';
import BlankScreen18508Navigator from '../features/BlankScreen18508/navigator';
import CalendarView38507Navigator from '../features/CalendarView38507/navigator';
import EmailAuth48506Navigator from '../features/EmailAuth48506/navigator';
import CalendarView38505Navigator from '../features/CalendarView38505/navigator';
import EmailAuth48504Navigator from '../features/EmailAuth48504/navigator';
import BlankScreen28503Navigator from '../features/BlankScreen28503/navigator';
import BlankScreen18502Navigator from '../features/BlankScreen18502/navigator';
import BlankScreen98499Navigator from '../features/BlankScreen98499/navigator';
import BlankScreen28498Navigator from '../features/BlankScreen28498/navigator';
import BlankScreen18497Navigator from '../features/BlankScreen18497/navigator';
import CalendarView38496Navigator from '../features/CalendarView38496/navigator';
import EmailAuth48495Navigator from '../features/EmailAuth48495/navigator';
import CalendarView38494Navigator from '../features/CalendarView38494/navigator';
import EmailAuth48493Navigator from '../features/EmailAuth48493/navigator';
import BlankScreen28492Navigator from '../features/BlankScreen28492/navigator';
import BlankScreen18482Navigator from '../features/BlankScreen18482/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen18511: { screen: BlankScreen18511Navigator },
BlankScreen98510: { screen: BlankScreen98510Navigator },
BlankScreen28509: { screen: BlankScreen28509Navigator },
BlankScreen18508: { screen: BlankScreen18508Navigator },
CalendarView38507: { screen: CalendarView38507Navigator },
EmailAuth48506: { screen: EmailAuth48506Navigator },
CalendarView38505: { screen: CalendarView38505Navigator },
EmailAuth48504: { screen: EmailAuth48504Navigator },
BlankScreen28503: { screen: BlankScreen28503Navigator },
BlankScreen18502: { screen: BlankScreen18502Navigator },
BlankScreen98499: { screen: BlankScreen98499Navigator },
BlankScreen28498: { screen: BlankScreen28498Navigator },
BlankScreen18497: { screen: BlankScreen18497Navigator },
CalendarView38496: { screen: CalendarView38496Navigator },
EmailAuth48495: { screen: EmailAuth48495Navigator },
CalendarView38494: { screen: CalendarView38494Navigator },
EmailAuth48493: { screen: EmailAuth48493Navigator },
BlankScreen28492: { screen: BlankScreen28492Navigator },
BlankScreen18482: { screen: BlankScreen18482Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
