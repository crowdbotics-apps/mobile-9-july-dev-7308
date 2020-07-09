import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth48637Navigator from '../features/EmailAuth48637/navigator';
import CalendarView38636Navigator from '../features/CalendarView38636/navigator';
import EmailAuth48635Navigator from '../features/EmailAuth48635/navigator';
import BlankScreen28634Navigator from '../features/BlankScreen28634/navigator';
import BlankScreen18633Navigator from '../features/BlankScreen18633/navigator';
import BlankScreen98632Navigator from '../features/BlankScreen98632/navigator';
import BlankScreen28631Navigator from '../features/BlankScreen28631/navigator';
import BlankScreen18630Navigator from '../features/BlankScreen18630/navigator';
import CalendarView38629Navigator from '../features/CalendarView38629/navigator';
import EmailAuth48628Navigator from '../features/EmailAuth48628/navigator';
import CalendarView38627Navigator from '../features/CalendarView38627/navigator';
import EmailAuth48626Navigator from '../features/EmailAuth48626/navigator';
import BlankScreen28625Navigator from '../features/BlankScreen28625/navigator';
import BlankScreen18624Navigator from '../features/BlankScreen18624/navigator';
import BlankScreen28623Navigator from '../features/BlankScreen28623/navigator';
import BlankScreen18622Navigator from '../features/BlankScreen18622/navigator';
import CalendarView38621Navigator from '../features/CalendarView38621/navigator';
import EmailAuth48620Navigator from '../features/EmailAuth48620/navigator';
import CalendarView38619Navigator from '../features/CalendarView38619/navigator';
import EmailAuth48618Navigator from '../features/EmailAuth48618/navigator';
import BlankScreen28617Navigator from '../features/BlankScreen28617/navigator';
import BlankScreen18616Navigator from '../features/BlankScreen18616/navigator';
import BlankScreen98615Navigator from '../features/BlankScreen98615/navigator';
import BlankScreen28614Navigator from '../features/BlankScreen28614/navigator';
import BlankScreen18613Navigator from '../features/BlankScreen18613/navigator';
import CalendarView38612Navigator from '../features/CalendarView38612/navigator';
import EmailAuth48611Navigator from '../features/EmailAuth48611/navigator';
import CalendarView38610Navigator from '../features/CalendarView38610/navigator';
import EmailAuth48609Navigator from '../features/EmailAuth48609/navigator';
import BlankScreen28608Navigator from '../features/BlankScreen28608/navigator';
import BlankScreen18607Navigator from '../features/BlankScreen18607/navigator';
import BlankScreen98606Navigator from '../features/BlankScreen98606/navigator';
import BlankScreen28605Navigator from '../features/BlankScreen28605/navigator';
import BlankScreen18604Navigator from '../features/BlankScreen18604/navigator';
import CalendarView38603Navigator from '../features/CalendarView38603/navigator';
import EmailAuth48602Navigator from '../features/EmailAuth48602/navigator';
import CalendarView38601Navigator from '../features/CalendarView38601/navigator';
import EmailAuth48600Navigator from '../features/EmailAuth48600/navigator';
import BlankScreen28599Navigator from '../features/BlankScreen28599/navigator';
import BlankScreen18598Navigator from '../features/BlankScreen18598/navigator';
import BlankScreen28597Navigator from '../features/BlankScreen28597/navigator';
import BlankScreen18596Navigator from '../features/BlankScreen18596/navigator';
import CalendarView38595Navigator from '../features/CalendarView38595/navigator';
import EmailAuth48594Navigator from '../features/EmailAuth48594/navigator';
import CalendarView38593Navigator from '../features/CalendarView38593/navigator';
import EmailAuth48592Navigator from '../features/EmailAuth48592/navigator';
import BlankScreen28591Navigator from '../features/BlankScreen28591/navigator';
import BlankScreen18590Navigator from '../features/BlankScreen18590/navigator';
import BlankScreen98589Navigator from '../features/BlankScreen98589/navigator';
import BlankScreen28588Navigator from '../features/BlankScreen28588/navigator';
import BlankScreen18587Navigator from '../features/BlankScreen18587/navigator';
import CalendarView38586Navigator from '../features/CalendarView38586/navigator';
import EmailAuth48585Navigator from '../features/EmailAuth48585/navigator';
import CalendarView38584Navigator from '../features/CalendarView38584/navigator';
import EmailAuth48583Navigator from '../features/EmailAuth48583/navigator';
import BlankScreen28582Navigator from '../features/BlankScreen28582/navigator';
import BlankScreen18581Navigator from '../features/BlankScreen18581/navigator';
import BlankScreen98580Navigator from '../features/BlankScreen98580/navigator';
import BlankScreen28579Navigator from '../features/BlankScreen28579/navigator';
import BlankScreen18578Navigator from '../features/BlankScreen18578/navigator';
import CalendarView38577Navigator from '../features/CalendarView38577/navigator';
import EmailAuth48576Navigator from '../features/EmailAuth48576/navigator';
import CalendarView38575Navigator from '../features/CalendarView38575/navigator';
import EmailAuth48574Navigator from '../features/EmailAuth48574/navigator';
import BlankScreen28573Navigator from '../features/BlankScreen28573/navigator';
import BlankScreen18572Navigator from '../features/BlankScreen18572/navigator';
import BlankScreen28571Navigator from '../features/BlankScreen28571/navigator';
import BlankScreen18570Navigator from '../features/BlankScreen18570/navigator';
import CalendarView38569Navigator from '../features/CalendarView38569/navigator';
import EmailAuth48568Navigator from '../features/EmailAuth48568/navigator';
import CalendarView38567Navigator from '../features/CalendarView38567/navigator';
import EmailAuth48566Navigator from '../features/EmailAuth48566/navigator';
import BlankScreen28565Navigator from '../features/BlankScreen28565/navigator';
import BlankScreen18564Navigator from '../features/BlankScreen18564/navigator';
import BlankScreen98563Navigator from '../features/BlankScreen98563/navigator';
import BlankScreen28562Navigator from '../features/BlankScreen28562/navigator';
import BlankScreen18561Navigator from '../features/BlankScreen18561/navigator';
import CalendarView38560Navigator from '../features/CalendarView38560/navigator';
import EmailAuth48559Navigator from '../features/EmailAuth48559/navigator';
import CalendarView38558Navigator from '../features/CalendarView38558/navigator';
import EmailAuth48557Navigator from '../features/EmailAuth48557/navigator';
import BlankScreen28556Navigator from '../features/BlankScreen28556/navigator';
import BlankScreen18555Navigator from '../features/BlankScreen18555/navigator';
import BlankScreen98554Navigator from '../features/BlankScreen98554/navigator';
import BlankScreen28553Navigator from '../features/BlankScreen28553/navigator';
import BlankScreen18552Navigator from '../features/BlankScreen18552/navigator';
import CalendarView38551Navigator from '../features/CalendarView38551/navigator';
import EmailAuth48550Navigator from '../features/EmailAuth48550/navigator';
import CalendarView38549Navigator from '../features/CalendarView38549/navigator';
import EmailAuth48548Navigator from '../features/EmailAuth48548/navigator';
import BlankScreen28547Navigator from '../features/BlankScreen28547/navigator';
import BlankScreen18546Navigator from '../features/BlankScreen18546/navigator';
import BlankScreen28545Navigator from '../features/BlankScreen28545/navigator';
import BlankScreen18544Navigator from '../features/BlankScreen18544/navigator';
import CalendarView38543Navigator from '../features/CalendarView38543/navigator';
import EmailAuth48542Navigator from '../features/EmailAuth48542/navigator';
import CalendarView38541Navigator from '../features/CalendarView38541/navigator';
import EmailAuth48540Navigator from '../features/EmailAuth48540/navigator';
import BlankScreen28539Navigator from '../features/BlankScreen28539/navigator';
import BlankScreen18538Navigator from '../features/BlankScreen18538/navigator';
import BlankScreen98537Navigator from '../features/BlankScreen98537/navigator';
import BlankScreen28536Navigator from '../features/BlankScreen28536/navigator';
import BlankScreen18535Navigator from '../features/BlankScreen18535/navigator';
import CalendarView38534Navigator from '../features/CalendarView38534/navigator';
import EmailAuth48533Navigator from '../features/EmailAuth48533/navigator';
import CalendarView38532Navigator from '../features/CalendarView38532/navigator';
import EmailAuth48531Navigator from '../features/EmailAuth48531/navigator';
import BlankScreen28530Navigator from '../features/BlankScreen28530/navigator';
import BlankScreen18529Navigator from '../features/BlankScreen18529/navigator';
import BlankScreen98528Navigator from '../features/BlankScreen98528/navigator';
import BlankScreen28527Navigator from '../features/BlankScreen28527/navigator';
import BlankScreen18526Navigator from '../features/BlankScreen18526/navigator';
import CalendarView38525Navigator from '../features/CalendarView38525/navigator';
import EmailAuth48524Navigator from '../features/EmailAuth48524/navigator';
import CalendarView38523Navigator from '../features/CalendarView38523/navigator';
import EmailAuth48522Navigator from '../features/EmailAuth48522/navigator';
import BlankScreen28521Navigator from '../features/BlankScreen28521/navigator';
import BlankScreen18520Navigator from '../features/BlankScreen18520/navigator';
import BlankScreen28518Navigator from '../features/BlankScreen28518/navigator';
import BlankScreen18517Navigator from '../features/BlankScreen18517/navigator';
import CalendarView38516Navigator from '../features/CalendarView38516/navigator';
import EmailAuth48515Navigator from '../features/EmailAuth48515/navigator';
import CalendarView38514Navigator from '../features/CalendarView38514/navigator';
import EmailAuth48513Navigator from '../features/EmailAuth48513/navigator';
import BlankScreen28512Navigator from '../features/BlankScreen28512/navigator';
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
EmailAuth48637: { screen: EmailAuth48637Navigator },
CalendarView38636: { screen: CalendarView38636Navigator },
EmailAuth48635: { screen: EmailAuth48635Navigator },
BlankScreen28634: { screen: BlankScreen28634Navigator },
BlankScreen18633: { screen: BlankScreen18633Navigator },
BlankScreen98632: { screen: BlankScreen98632Navigator },
BlankScreen28631: { screen: BlankScreen28631Navigator },
BlankScreen18630: { screen: BlankScreen18630Navigator },
CalendarView38629: { screen: CalendarView38629Navigator },
EmailAuth48628: { screen: EmailAuth48628Navigator },
CalendarView38627: { screen: CalendarView38627Navigator },
EmailAuth48626: { screen: EmailAuth48626Navigator },
BlankScreen28625: { screen: BlankScreen28625Navigator },
BlankScreen18624: { screen: BlankScreen18624Navigator },
BlankScreen28623: { screen: BlankScreen28623Navigator },
BlankScreen18622: { screen: BlankScreen18622Navigator },
CalendarView38621: { screen: CalendarView38621Navigator },
EmailAuth48620: { screen: EmailAuth48620Navigator },
CalendarView38619: { screen: CalendarView38619Navigator },
EmailAuth48618: { screen: EmailAuth48618Navigator },
BlankScreen28617: { screen: BlankScreen28617Navigator },
BlankScreen18616: { screen: BlankScreen18616Navigator },
BlankScreen98615: { screen: BlankScreen98615Navigator },
BlankScreen28614: { screen: BlankScreen28614Navigator },
BlankScreen18613: { screen: BlankScreen18613Navigator },
CalendarView38612: { screen: CalendarView38612Navigator },
EmailAuth48611: { screen: EmailAuth48611Navigator },
CalendarView38610: { screen: CalendarView38610Navigator },
EmailAuth48609: { screen: EmailAuth48609Navigator },
BlankScreen28608: { screen: BlankScreen28608Navigator },
BlankScreen18607: { screen: BlankScreen18607Navigator },
BlankScreen98606: { screen: BlankScreen98606Navigator },
BlankScreen28605: { screen: BlankScreen28605Navigator },
BlankScreen18604: { screen: BlankScreen18604Navigator },
CalendarView38603: { screen: CalendarView38603Navigator },
EmailAuth48602: { screen: EmailAuth48602Navigator },
CalendarView38601: { screen: CalendarView38601Navigator },
EmailAuth48600: { screen: EmailAuth48600Navigator },
BlankScreen28599: { screen: BlankScreen28599Navigator },
BlankScreen18598: { screen: BlankScreen18598Navigator },
BlankScreen28597: { screen: BlankScreen28597Navigator },
BlankScreen18596: { screen: BlankScreen18596Navigator },
CalendarView38595: { screen: CalendarView38595Navigator },
EmailAuth48594: { screen: EmailAuth48594Navigator },
CalendarView38593: { screen: CalendarView38593Navigator },
EmailAuth48592: { screen: EmailAuth48592Navigator },
BlankScreen28591: { screen: BlankScreen28591Navigator },
BlankScreen18590: { screen: BlankScreen18590Navigator },
BlankScreen98589: { screen: BlankScreen98589Navigator },
BlankScreen28588: { screen: BlankScreen28588Navigator },
BlankScreen18587: { screen: BlankScreen18587Navigator },
CalendarView38586: { screen: CalendarView38586Navigator },
EmailAuth48585: { screen: EmailAuth48585Navigator },
CalendarView38584: { screen: CalendarView38584Navigator },
EmailAuth48583: { screen: EmailAuth48583Navigator },
BlankScreen28582: { screen: BlankScreen28582Navigator },
BlankScreen18581: { screen: BlankScreen18581Navigator },
BlankScreen98580: { screen: BlankScreen98580Navigator },
BlankScreen28579: { screen: BlankScreen28579Navigator },
BlankScreen18578: { screen: BlankScreen18578Navigator },
CalendarView38577: { screen: CalendarView38577Navigator },
EmailAuth48576: { screen: EmailAuth48576Navigator },
CalendarView38575: { screen: CalendarView38575Navigator },
EmailAuth48574: { screen: EmailAuth48574Navigator },
BlankScreen28573: { screen: BlankScreen28573Navigator },
BlankScreen18572: { screen: BlankScreen18572Navigator },
BlankScreen28571: { screen: BlankScreen28571Navigator },
BlankScreen18570: { screen: BlankScreen18570Navigator },
CalendarView38569: { screen: CalendarView38569Navigator },
EmailAuth48568: { screen: EmailAuth48568Navigator },
CalendarView38567: { screen: CalendarView38567Navigator },
EmailAuth48566: { screen: EmailAuth48566Navigator },
BlankScreen28565: { screen: BlankScreen28565Navigator },
BlankScreen18564: { screen: BlankScreen18564Navigator },
BlankScreen98563: { screen: BlankScreen98563Navigator },
BlankScreen28562: { screen: BlankScreen28562Navigator },
BlankScreen18561: { screen: BlankScreen18561Navigator },
CalendarView38560: { screen: CalendarView38560Navigator },
EmailAuth48559: { screen: EmailAuth48559Navigator },
CalendarView38558: { screen: CalendarView38558Navigator },
EmailAuth48557: { screen: EmailAuth48557Navigator },
BlankScreen28556: { screen: BlankScreen28556Navigator },
BlankScreen18555: { screen: BlankScreen18555Navigator },
BlankScreen98554: { screen: BlankScreen98554Navigator },
BlankScreen28553: { screen: BlankScreen28553Navigator },
BlankScreen18552: { screen: BlankScreen18552Navigator },
CalendarView38551: { screen: CalendarView38551Navigator },
EmailAuth48550: { screen: EmailAuth48550Navigator },
CalendarView38549: { screen: CalendarView38549Navigator },
EmailAuth48548: { screen: EmailAuth48548Navigator },
BlankScreen28547: { screen: BlankScreen28547Navigator },
BlankScreen18546: { screen: BlankScreen18546Navigator },
BlankScreen28545: { screen: BlankScreen28545Navigator },
BlankScreen18544: { screen: BlankScreen18544Navigator },
CalendarView38543: { screen: CalendarView38543Navigator },
EmailAuth48542: { screen: EmailAuth48542Navigator },
CalendarView38541: { screen: CalendarView38541Navigator },
EmailAuth48540: { screen: EmailAuth48540Navigator },
BlankScreen28539: { screen: BlankScreen28539Navigator },
BlankScreen18538: { screen: BlankScreen18538Navigator },
BlankScreen98537: { screen: BlankScreen98537Navigator },
BlankScreen28536: { screen: BlankScreen28536Navigator },
BlankScreen18535: { screen: BlankScreen18535Navigator },
CalendarView38534: { screen: CalendarView38534Navigator },
EmailAuth48533: { screen: EmailAuth48533Navigator },
CalendarView38532: { screen: CalendarView38532Navigator },
EmailAuth48531: { screen: EmailAuth48531Navigator },
BlankScreen28530: { screen: BlankScreen28530Navigator },
BlankScreen18529: { screen: BlankScreen18529Navigator },
BlankScreen98528: { screen: BlankScreen98528Navigator },
BlankScreen28527: { screen: BlankScreen28527Navigator },
BlankScreen18526: { screen: BlankScreen18526Navigator },
CalendarView38525: { screen: CalendarView38525Navigator },
EmailAuth48524: { screen: EmailAuth48524Navigator },
CalendarView38523: { screen: CalendarView38523Navigator },
EmailAuth48522: { screen: EmailAuth48522Navigator },
BlankScreen28521: { screen: BlankScreen28521Navigator },
BlankScreen18520: { screen: BlankScreen18520Navigator },
BlankScreen28518: { screen: BlankScreen28518Navigator },
BlankScreen18517: { screen: BlankScreen18517Navigator },
CalendarView38516: { screen: CalendarView38516Navigator },
EmailAuth48515: { screen: EmailAuth48515Navigator },
CalendarView38514: { screen: CalendarView38514Navigator },
EmailAuth48513: { screen: EmailAuth48513Navigator },
BlankScreen28512: { screen: BlankScreen28512Navigator },
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
