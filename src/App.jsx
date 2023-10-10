import AppRoutes from "./components/Routes/AppRoutes";
import Header from "./components/Header/Header";
import { useLocation } from 'react-router-dom';
import DashboardLogo from './components/images/Dashboard.png'
import ReportsLogo from './components/images/Reports.png'
import StorageTransferingLogo from './components/images/StorageTransfering.png'
import MasterDataLogo from './components/images/MasterData.png'
import MyRequestLogo from './components/images/MyRequest.png'
import RequestManageLogo from './components/images/RequestManage.png'
import AddingItemLogo from './components/images/AddingItem.png'
function App() {
  const location = useLocation();
  const path = location.pathname;
  let title = '';
  let icon;

  // Set the title based on the current path
  switch (path) {
    case '/':
      title = 'Login';
      break;
    case '/Inventory':
      title = 'Inventory';
      icon = <i className="fa-solid fa-warehouse me-2" style={{fontSize: '20px'}}/> ;
      break;
    case '/Dashboard':
      title = 'Dash board';
      icon = <img alt='' src={DashboardLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    case '/AddingItem':
      title = 'Add Item to Inventory';
      icon = <img alt='' src={AddingItemLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    case '/Account':
      title = 'Account';
      icon = <i className="fa-regular fa-user me-2" style={{fontSize: '25px'}}/>;
      break;
    case '/Reports':
      title = 'Reports';
      icon = <img alt='' src={ReportsLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    case '/StorageTransfering':
      title = 'Storage Transfering';
      icon = <img alt='' src={StorageTransferingLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    case '/MasterData':
      title = 'Master Data';
      icon = <img alt='' src={MasterDataLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    case '/MyRequest':
      title = 'MyRequest';
      icon = <img alt='' src={MyRequestLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    case '/RequestManage':
      title = 'Request Manage';
      icon = <img alt='' src={RequestManageLogo} width={'35'} height={'35'} style={{ filter: 'brightness(0) invert(1)', }}/>;
      break;
    default:
      title = 'Not Found';
  }

  const isLoginPage = path === '/'

  return <>
        {!isLoginPage && <Header Title={title} Icon={icon} />}
        {/* {!isLoginPage && <Sidebar Title={title} />} */}
        <AppRoutes/>
  </>
  //return <AppRoutes/>
}

export default App;
