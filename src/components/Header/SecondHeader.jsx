import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './SecondHeaderStyle.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ReportIcon from '@mui/icons-material/Report';
import DatasetIcon from '@mui/icons-material/Dataset';

const SecondHeader = () =>{
  const navigate = useNavigate()
  const location = useLocation();
  const path = location.pathname;

    return <>
    <Navbar className='py-2 justify-content-between' expand="lg" style={{background:'gray'}}>
    {/* <Navbar.Brand href="/home">
          <img src={logoApp} alt="app logo" width={'30'} height={'30'} className="d-inline-block align-top" /> Khuong Webapp</Navbar.Brand> */}
        <Nav onClick={()=>navigate('/Inventory')}  className="ms-3 nav-item text-white">
         <Button className='rounded-0' variant={path === '/Inventory' ? 'warning' : 'outline-warning'}>
         <InventoryIcon/> Inventory</Button></Nav>
        
        <Nav onClick={()=>navigate('/AddingItem')}  className="nav-item text-white">
         <Button className='rounded-0' variant={path === '/AddingItem' ? 'warning' : 'outline-warning'}>
          <AddCircleIcon/> Adding Item to Inventory</Button></Nav>

        <Nav onClick={()=>navigate('/MyRequest')} 
        className="nav-item text-white"><Button className='rounded-0' variant={path === '/MyRequest' ? 'warning' : 'outline-warning'}>
          <SendRoundedIcon/> My Request</Button></Nav>

        <Nav onClick={()=>navigate('/RequestManage')}
         className="nav-item text-white"> <Button className='rounded-0' variant={path === '/RequestManage' ? 'warning' : 'outline-warning'}>
         <ScheduleSendIcon/> Request Manage</Button></Nav>
    
        <Nav onClick={()=>navigate('/StorageTransfering')} 
        className="nav-item text-white"> <Button className='rounded-0' variant={path === '/StorageTransfering' ? 'warning' : 'outline-warning'}>
          <WarehouseIcon/> Storage Transfering</Button></Nav>
      
        <Nav onClick={()=>navigate('/Reports')} 
        className="nav-item text-white"> <Button className='rounded-0' variant={path === '/Reports' ? 'warning' : 'outline-warning'}>
         <ReportIcon/> Reports</Button></Nav>
    
        <Nav onClick={()=>navigate('/MasterData')}  
        className="nav-item text-white"> <Button className='rounded-0' variant={path === '/MasterData' ? 'warning' : 'outline-warning'}>
         <DatasetIcon/> Master Data</Button></Nav>
      
        <Nav onClick={()=>navigate('/Dashboard')} 
        className="nav-item text-white"> <Button className='rounded-0' variant={path === '/Dashboard' ? 'warning' : 'outline-warning'}>
         <DashboardIcon/> Dashboard</Button></Nav>
                
        <Nav onClick={()=>navigate('/Account')} 
        className="me-3 nav-item text-white"> <Button className='rounded-0' variant={path === '/Account' ? 'warning' : 'outline-warning'}>
         <ManageAccountsIcon/> Account</Button></Nav>
  </Navbar>
    </>
    
}

export default SecondHeader