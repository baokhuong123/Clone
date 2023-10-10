import React from 'react';
import Alert from 'react-bootstrap/Alert';

function NotFound() {
    return <Alert variant="danger" className='my-5'>
    <Alert.Heading>404</Alert.Heading>
    <p>
      Page not found !
    </p>
  </Alert>
}

export default NotFound;