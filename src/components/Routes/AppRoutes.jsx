import { Route, Routes } from 'react-router';
import Inventory from '../Pages/Inventory/Inventory'
import Login from '../Pages/Login/Login'
import Account from '../Pages/Account/Account'
import React from 'react';
// import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import { ToastContainer } from 'react-toastify';
import StorageTransfering from '../Pages/StorageTransferring/StorageTransferring';


function AppRoutes() {
    return<>
      <ToastContainer/>
      <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/Inventory' element={<Inventory/>}/>
            <Route path='/Dashboard' element=''/>
            <Route path='/AddingItem' element=''/>
            <Route path='/StorageTransfering' element={<StorageTransfering/>}/>
            <Route path='/MasterData' element=''/>
            <Route path='/MyRequest' element=''/>
            <Route path='/RequestManage' element=''/>
            <Route path='/Reports' element=''/>
            <Route path='/Account' element={<Account/>}/>
        </Routes>
    </> 
}

export default AppRoutes;