import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CreateAccountModalStyle.scss'
const LogoutModal= ({show, handleClose, logout})=>{
    return <Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Do you want to log out?</Modal.Title>
      <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={handleClose}/>
    </Modal.Header>
    {/* <Modal.Body>Are you sure want to log out?</Modal.Body> */}
    <Modal.Footer>
      <Button variant="secondary" className='rounded-0' onClick={handleClose}>
        Cancel
      </Button>
      <Button className='rounded-0' variant="warning" onClick={logout}>
        Logout
      </Button>
    </Modal.Footer>
  </Modal>
}

export default LogoutModal