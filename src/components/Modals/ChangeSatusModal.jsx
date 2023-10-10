import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ChangeStatusModal = ({show, userInfo, handleClose}) => {
    
    const handleStatus = () =>{

    }
    return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Do you want to {userInfo.Status === 'Active' ? 'disable' : 'active'} {userInfo.Fullname} </Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose} className='rounded-0 me-2'>
        Cancel
      </Button>
      <Button className='rounded-0' variant={userInfo.Status === 'Active' ? 'danger' : "success"} onClick={handleStatus}>
        {userInfo.Status === 'Active' ? 'Disable' : 'Active'}
      </Button>
    </Modal.Footer>
  </Modal>
}

export default ChangeStatusModal