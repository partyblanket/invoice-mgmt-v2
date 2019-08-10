import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login, register } from '../utils/actions';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'


function LoginRegisterModal({dispatch, showLoginModal}) {


  const [registerDets, setRegisterDets] = useState({email: '', password:''});

  const [loginDets, setLoginDets] = useState({email: '', password:''});

  const [registering, setRegistering] = useState(false);

  const handleChange = (e) => {
    if(e.target.parentElement.id === 'login-form'){
        setLoginDets({...loginDets, [e.target.name]: e.target.value})
    }else if(e.target.parentElement.id === 'register-form'){
        setRegisterDets({...registerDets, [e.target.name]: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.id === 'login-form'){
      dispatch(login(loginDets));
    }else if(e.target.id === 'register-form'){
      dispatch(register(registerDets));
    }
    // dispatch(setLoginModalState(false))
  }


  const loginEl = (
    <>
      <Modal.Header closeButton >
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="login-form" onSubmit={handleSubmit}>
          <FormControl type='text' name='email' placeholder='email' value={loginDets.email} onChange={handleChange} />
          <FormControl type='password' name='password' placeholder='password' value={loginDets.password} onChange={handleChange} />
        </Form>

        
      </Modal.Body>

      <Modal.Footer>
        <Button size='sm' onClick={() => setRegistering(true)}>Not registered? Click here to register</Button>
        <Button type='submit' form='login-form' variant="primary">Login</Button>
      </Modal.Footer>
    </>
  )

  const registerEl = (
    <>
    <Modal.Header closeButton >
      <Modal.Title>Register</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form id="register-form" onSubmit={handleSubmit}>
        <FormControl type='text' name='email' placeholder='email' value={registerDets.email} onChange={handleChange} />
        <FormControl type='password' name='password' placeholder='password' value={registerDets.password} onChange={handleChange} />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button size='sm' onClick={() => setRegistering(false)}>Already registered? Click here to Login</Button>
      <Button type='submit' form='register-form' variant="primary">Register</Button>
    </Modal.Footer>
  </>
  )

  return (
    <>
      <Modal show={true} onHide={() => {}}>
        {registering ? registerEl : loginEl}
      </Modal>
    </>
    
  )
}

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(LoginRegisterModal)