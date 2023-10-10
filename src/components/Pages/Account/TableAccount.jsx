import { Button } from "react-bootstrap"
import { TextField } from "@mui/material/"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
import CreateAccountModal from "../../Modals/CreateAccountModal";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import EditAccountModal from "../../Modals/EditAccountModal";
import ChangeStatusModal from "../../Modals/ChangeSatusModal";

const TableAccount =()=>{
    const inputRef = useRef(null);
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showStatus, setShowStatus] = useState(false)
    const dummylist = [
      {
        ID: 'Hisoft Co. 1',
        Fullname: 'Nguyen Van Bao Khuong',
        Username: 'empty',
        Password: 'ASD@JB78',
        Email: 'khuong@gmail.com',
        Role: 'staff',
        Status: 'Active'
      },
      {
        ID: 'Hisoft Co. 2',
        Fullname: 'John Doe',
        Username: 'empty',
        Password: 'P@ssw0rd',
        Email: 'johndoe@example.com',
        Role: 'staff',
        Status: 'Disable'
      },
      {
        ID: 'Hisoft Co. 3',
        Fullname: 'Jane Smith',
        Username: 'empty',
        Password: 'Secret123',
        Email: 'janesmith@example.com',
        Role: 'manager',
        Status: 'Active'
      },
      {
        ID: 'Hisoft Co. 4',
        Fullname: 'Alice Johnson',
        Username: 'empty',
        Password: 'Pass123!',
        Email: 'alicejohnson@example.com',
        Role: 'admin',
        Status: 'Disable'
      },
      {
        ID: 'Hisoft Co. 5',
        Fullname: 'Bob Anderson',
        Username: 'empty',
        Password: 'B0bPassw0rd',
        Email: 'bobanderson@example.com',
        Role: 'stocker',
        Status: 'Active'
      }
    ];
    const [sort, setSort] = useState(false)
    const sortedAscending = dummylist.slice().sort((a, b) => a.Status.localeCompare(b.Status));
    const sortedDescending = dummylist.slice().sort((a, b) => b.Status.localeCompare(a.Status));
    
    const [object, setObject] = useState({})
    const handleClickEditBtn = (user) => {
        setShowEdit(true)
        setObject(user)
    }
    const handleClickStatusBtn = (user) => {
        setShowStatus(true)
        setObject(user)
    }
    return <>
    <TextField className="me-5" InputProps={{
    startAdornment: (
      <InputAdornment position="start" onClick={() => inputRef.current.focus()}>
        <SearchIcon />
      </InputAdornment>
    ),
  }}
  inputRef={inputRef} id="outlined-basic" size="small" placeholder="Search User by Full Name" variant="outlined" />
  
  <Button variant="warning" onClick={() => setShow(true)}>
    <i className="fa-solid fa-user-plus" /> Create Account
  </Button>

  <Table striped bordered hover variant="dark"
   className="mt-4 text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>User Name</th>
          <th>Password</th>
          <th>Email</th>
          <th>Role</th>
          <th style={{ cursor: 'pointer'}} onClick={() => setSort(!sort)}>
            Status <i className={`fa-solid ${sort ? 'fa-arrow-up' : 'fa-arrow-down'}-a-z`} /></th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {(sort ? sortedDescending : sortedAscending).map((user,index) => <tr key={`Hisoft Co. Staff ${index}`}>
          <td><p className="mx-1">{user.ID}</p></td>
          <td><p className="mx-1">{user.Fullname}</p></td>
          <td><p className="mx-1">Empty</p></td>
          <td><p className="mx-1">{user.Password}</p></td>
          <td><p className="mx-1">{user.Email}</p></td>
          <td><p className="mx-1">{user.Role}</p></td>
          <td><p className="mx-1">{user.Status}</p></td>
          <td><Button variant='warning' className="px-3 mx-3 rounded-0" onClick={() => handleClickEditBtn(user)}>
            Edit</Button>
          <Button variant={user.Status === 'Active' ? 'danger' : 'success'}
          onClick={() => handleClickStatusBtn(user)}
           className="px-2 mx-1 rounded-0">
            {user.Status === 'Active' ? 'Disable' : 'Active'}</Button></td>  
        </tr>
        )}
      </tbody>
    </Table>

  {show && <CreateAccountModal show={show} handleClose={() => setShow(false)}/>}
  {showEdit && <EditAccountModal userInfo={object} show={showEdit} handleClose={() => setShowEdit(false)}/>}
  {showStatus && <ChangeStatusModal userInfo={object} show={showStatus} handleClose={() => setShowStatus(false)}/>}
   
  </>
}

export default TableAccount