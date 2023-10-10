import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, Container, Card,Table } from 'react-bootstrap';
import './StorageTranferringStyle.scss'
import ResetLogo from '../../images/Reset.png'
import DatePicker from "react-datepicker";


const StorageTransfering = () =>{
    const dummylist = [
        {
          ItemName: 'Laptop Asus',
          AssetName: 'Product line - HiCo. - 1',
          Quantity: 1,
          From: '4/10/2023',
          To: '10/10/2023',
          TransferDate: '10/10/2023',
        },   
        {
            ItemName: 'Monitor Dell',
            AssetName: 'Product line - HiCo. - 2',
            Quantity: 2,
            From: '4/10/2023',
            To: '10/10/2023',
            TransferDate: '10/10/2023',
          },
          {
            ItemName: 'Keyboard Logitech',
            AssetName: 'Product line - HiCo. - 3',
            Quantity: 3,
            From: '4/10/2023',
            To: '10/10/2023',
            TransferDate: '10/10/2023',
          },
          {
            ItemName: 'Mouse Microsoft',
            AssetName: 'Product line - HiCo. - 4',
            Quantity: 5,
            From: '4/10/2023',
            To: '10/10/2023',
            TransferDate: '10/10/2023',
          },
          {
            ItemName: 'Headphones Sony',
            AssetName: 'Product line - HiCo. - 5',
            Quantity: 4,
            From: '4/10/2023',
            To: '10/10/2023',
            TransferDate: '10/10/2023',
          },
    ]

    const navigate = useNavigate()
    let [authToken, setAuthToken] = useState('');
    const getAuthToken = () => {
        setAuthToken(localStorage.getItem('authToken'))
    }

   
    const [filter, setFilter] = useState({
      From: '',
      To: '',
      ItemName: '',
      AssetName: '',
      By: '',
    })
    const handleInput = (e) => {
      const newObj = {...filter, [e.target.name]: e.target.value}
      setFilter(newObj)
    }
    const handleInputStartDate = date =>{
      // const formatted =date.toLocaleDateString("en-US",{
      //   day: "2-digit",
      //   month: "2-digit",
      //   year: "numeric",
      // }).split('/').join(' / ')
      const newObj = {...filter, From: date}
      setFilter(newObj)
    }
    const handleInputEndDate = date =>{
      const newObj = {...filter, To: date}
      setFilter(newObj)
    }
    useEffect(()=>{
        getAuthToken()
    },[])
    return authToken !== '' && authToken !== null
     ? <Container id='BodyContent' style={{marginTop: '9.5rem'}}>
        <div className='mb-3'>
            <Button variant='warning'>Transfer item</Button>
        </div>
        <Card className='rounded-0 Box' bg='dark'
          text='light'>
            <Card.Body>
                <Card.Title><i className="fa-solid fa-filter"/> Filter</Card.Title>
                <hr />
                <Card.Text className='d-flex justify-content-between inputField'>
                    <div>
                    <label htmlFor="fromDate"><strong>From</strong></label><br/>
                    {/* <input id='fromDate' type="text" className='form-control' placeholder='DD - MM - YYYY'/> */}
                    <DatePicker name='From' placeholderText='DD / MM / YYYY' id='fromDate' className='form-control' selected={filter.From}
                     onChange={handleInputStartDate} dateFormat="dd / MM / yyyy"/>
                    </div>
                    <div>
                    <label htmlFor="toDate"><strong>To</strong></label><br/>
                    <DatePicker name='To' placeholderText='DD / MM / YYYY' id='toDate' className='form-control' selected={filter.To}
                     onChange={handleInputEndDate}
                     minDate={filter.From} dateFormat="dd / MM / yyyy"/>                                                     
                    </div>
                    <div>
                    <label htmlFor="itemName"><strong>Item Name</strong></label>
                    <input value={filter.ItemName} onChange={handleInput} name='ItemName' id='itemName' type="text" className='form-control' placeholder='Enter item name' />                                                         
                    </div>
                    <div>
                    <label htmlFor="assetName"><strong>Asset Name</strong></label>
                    <input value={filter.AssetName} onChange={handleInput} name='AssetName' id='assetName' type="text" className='form-control' placeholder='Enter asset name'/>                                                         
                    </div>
                    <div>
                    <label htmlFor="By"><strong>By</strong></label>
                    <input value={filter.By} name='By' onChange={handleInput} id='By' type="text" className='form-control' placeholder='By who?'/>                                                         
                    </div>       
                </Card.Text>
                <div className='d-flex justify-content-end'>
                    <Button onClick={()=>console.log(filter)} variant="warning" className='me-3 rounded-0'><i className="fa-solid fa-magnifying-glass"/> Search </Button>
                    <Button variant="warning" className='rounded-0' onClick={() => setFilter({
                                        From: '',
                                        To: '',
                                        ItemName: '',
                                        AssetName: '',
                                        By: '',
                                      })}><img src={ResetLogo}
                     alt="" height={22}  /> Reset </Button>
                </div>
            </Card.Body>
        </Card>
        <Table striped bordered hover variant="dark"
   className="mt-3 text-center">
      <thead>
        <tr>
          <th>Item name</th>
          <th>Asset name</th>
          <th>Quantity</th>
          <th>From</th>
          <th>To</th>
          <th>Transfer date</th>
        </tr>
      </thead>
      <tbody>
        {dummylist.map((item,index) => <tr key={`Hisoft Co. Staff ${index}`}>
          <td><p className="mx-1">{item.ItemName}</p></td>
          <td><p>{item.AssetName}</p></td>
          <td><p className="mx-1">{item.Quantity}</p></td>
          <td><p className="mx-1">{new Date(item.From).toLocaleDateString('en-GB')}</p></td>
          <td><p className="mx-1">{new Date(item.To).toLocaleDateString('en-GB')}</p></td>
          <td><p className="mx-1">{new Date(item.TransferDate).toLocaleDateString('en-GB')}</p></td>          
        </tr>
        )}
      </tbody>
    </Table>
     </Container>
     : navigate('/')
}

export default StorageTransfering