import { auth, provider } from "../../Services/FirebaseConfig"
import {signInWithPopup} from 'firebase/auth'
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router';
import './Login.scss'

const Login = () =>{
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)

    const handleSignIn = () => {
        signInWithPopup(auth, provider).then(data => {
            setUsername(data.user.displayName)
            setEmail(data.user.email)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('username', data.user.displayName)
            localStorage.setItem('authToken', data.user.accessToken)
            localStorage.setItem('avatar', data.user.photoURL)
           
            if(data.user) navigate('/Inventory')
        }).catch((error) => {
            console.log(error);
            return;
          })
    }
   
    useEffect(()=>{
        let checkToken = ''
        if(localStorage.getItem('authToken') !== '') {
            checkToken = localStorage.getItem('authToken')
            //console.log(checkToken)    
        }
        if(checkToken && checkToken !== null && checkToken !== '') navigate('/Inventory')
    },[])
    return <div className="background-box d-flex justify-content-center">
        
        <div className='login-container col-xl-4 col-md-5 col-sm-7 px-3' style={{marginTop: '10rem', marginBottom: '12rem'}}>
        <div className='title'><h4><b>Hisoft IT Asset Management</b></h4></div>        
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}
        className='form-control mb-4 mt-3' placeholder='Email or Username'/>
        
        <div className="password-field">
        <input type={showPassword === false ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
        className='form-control mb-4' placeholder='Password'
        //onKeyDown={handleEnterKey}
        />
        <i className={`fa-solid ${showPassword === false ? ' fa-eye': " fa-eye-slash"}`} onClick={()=>setShowPassword(!showPassword)}></i>
        </div>   
        
        <button disabled={email && password ? false : true}
         className={`loginBtn ${email && password ? 'login-enable' : ''} mb-4`}
         >
            <i className={`fa-solid fa-lock ${email && password ? 'fa-beat' : ''}`}></i> Login {false && <i className='fa-solid fa-sync fa-spin'></i>}
        </button>
        <Button onClick={handleSignIn}  className='google-btn' onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
            <i className={`fa-brands fa-google ${isHovered && 'fa-beat'} me-1`}/> Sign in with <strong>Google</strong> </Button>
    </div>
        </div>
}
export default Login