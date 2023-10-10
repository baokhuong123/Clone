import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import TableAccount from './TableAccount';
const Account = () =>{
    const navigate = useNavigate()
    let [authToken, setAuthToken] = useState('');
    const getAuthToken = () => {
        setAuthToken(localStorage.getItem('authToken'))
    }

    useEffect(()=>{
        getAuthToken()
    },[])
    //console.log(authToken)
    return authToken !== '' && authToken !== null
     ?  <Container id='BodyContent' style={{marginTop: '10rem'}}>
            <TableAccount/>
        </Container>
     : navigate('/')
}

export default Account