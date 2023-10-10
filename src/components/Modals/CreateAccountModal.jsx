import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CreateAccountModalStyle.scss'
import { toast } from 'react-toastify';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const CreateAccountModal = ({show, handleClose})=>{
  const [account, setAccount] = useState({
    Fullname: '',
    Role:'',
    Username: '',
    Password: '',
    Email: '',
  })
  const handleInput = (e) => {
    const newObj = {...account, [e.target.name]: e.target.value}
    setAccount(newObj)
  }

  const [error, setError] = useState({})
  const handleValidation = () =>{
    //e.preventDefault()
    const errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const username_pattern = /^[a-zA-Z]+$/;
    const fullname_pattern = /^[\p{L}\s]+$/u;
    if(account.Fullname === '') errors.Fullname = 'Full name is required!'
    if(account.Role === '') errors.Role = 'Role is required!'
    if(account.Email === '') errors.Email = 'Email is required!'
    if(account.Username === '') errors.Username = 'Username is required!'
    if(!email_pattern.test(account.Email) && account.Email !== '') errors.Email = 'Email is not correct!'
    if(!username_pattern.test(account.Username) && account.Username !== '') errors.Username = 'Username is not correct!'
    if(!fullname_pattern.test(account.Fullname) && account.Fullname !== '') errors.Fullname = 'Fullname is not correct!'
    setError(errors)
    console.log(errors)
    
    const isEmpty = Object.keys(errors).length === 0; // Check if errors object is empty
    return isEmpty
  }
  
  const createAccount = () =>{
    const checkValidation = handleValidation()
    if(checkValidation) {
      console.log(account)
      setAccount({
        Role: '',
        Fullname: '',
      Username: '',
      Password: RandomGeneratePassword(15),
      Email: '',
      })
      toast.success('Create success!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
        handleClose()
    }else {
      toast.error('Create fail!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    };
  }
  
  const RandomGeneratePassword = (length) => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const specialChars = '!@#$%^&*()';
      let randomString = '';

      const getRandomChar = (characters) => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
      };
      // Generate random letters
      for (let i = 0; i < 4; i++) {
        randomString += getRandomChar(letters);
      }
      // Generate random numbers
      for (let i = 0; i < 3; i++) {
        randomString += getRandomChar(numbers);
      }
      // Generate random special character
      randomString += getRandomChar(specialChars);
      // Fill remaining length with random characters
      const remainingLength = length - randomString.length;
      for (let i = 0; i < remainingLength; i++) {
        const allChars = letters + numbers + specialChars;
        randomString += getRandomChar(allChars);
      }
      // Shuffle the characters randomly
      randomString = randomString.split('').sort(() => Math.random() - 0.5).join('');
      return randomString;
  }

  useEffect(() => {
    setAccount({...account, Password: RandomGeneratePassword(15)})
  }, []);

  const [role, setrole] = useState('');
  
  return <Modal show={show} onHide={handleClose} centered>
    <Modal.Header >
      <Modal.Title>Create new account for staff</Modal.Title>
      <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={handleClose}/>
    </Modal.Header>
    <Modal.Body>
    <label htmlFor="fullname"><strong>Role <span style={{color:'red'}}>*</span></strong></label>    
    <FormControl fullWidth size='small'>
        <Select style={{background:'white'}}
          value={account.Role}
          onChange={handleInput}
          name="Role"
        >
          {[{role:'staff'},{role:'manager'},{role:'stocker'},{role:'admin'}].map(
            r => <MenuItem value={r.role}>{r.role}</MenuItem>
          )}
        </Select>
      </FormControl>
      {error.Role && <p className='mt-2' style={{color:'yellow'}}>{error.Role}</p>}

    <label className='mt-3' htmlFor="fullname"><strong>Full Name <span style={{color:'red'}}>*</span></strong></label>    
    <input onChange={handleInput} value={account.Fullname} name='Fullname' id='fullname' type="text" className='form-control inputAccount mb-3'/>
    {error.Fullname && <p style={{color:'yellow'}}>{error.Fullname}</p>}

    <label htmlFor="username"><strong>Username <span style={{color:'red'}}>*</span></strong></label>    
    <input onChange={handleInput} value={account.Username}  name='Username' id='username' type="text" className='form-control inputAccount mb-3'/>
    {error.Username && <p style={{color:'yellow'}}>{error.Username}</p>}

    <label htmlFor="password"><strong>Password </strong></label>    
    <input disabled value={account.Password} id='password' type="text" className='form-control inputAccount mb-3'/>
    
    <label htmlFor="email"><strong>Email <span style={{color:'red'}}>*</span></strong></label>    
    <input onChange={handleInput} value={account.Email}  name='Email' id='email' type="text" className='form-control inputAccount mb-2'/>
    {error.Email && <p style={{color:'yellow'}}>{error.Email}</p>}
    </Modal.Body>
    <Modal.Footer style={{background:'rgba(0, 0, 0, 0.8)'}}>
      <Button variant="secondary" onClick={handleClose} className='rounded-0 me-3'>
        Cancel
      </Button>
      <Button variant="warning" onClick={createAccount} className='rounded-0'>
        Create
      </Button>
    </Modal.Footer>
  </Modal>
}

export default CreateAccountModal 