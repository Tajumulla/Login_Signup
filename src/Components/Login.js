import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/user.png'
import '../App.css'
import { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const SignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((UserCredentials) => {
                console.log(UserCredentials)
            }).catch((error) => {
                console.log(error)
            })
     };
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> :
                    <div className="input">
                        <img src={user_icon} alt="user" />
                        <input type="text" placeholder="Username" value={user}
                            onChange={(e) => { setUser(e.target.value) }}/>
                    </div>
                }
                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input type='email' placeholder="Email" value={email}
                    onChange={(e) =>{setEmail(e.target.value)}}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="password" />
                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }}/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> :
                <div className="forgot">
                    Forgot Password ?<span>Click Here!</span>
                </div>
            }
            <div className="submit-container">
                <button className={action === "Login" ? "submit gray" : "submit"} onClick={
                    () => { setAction("Sign Up") }}>Sign Up</button>
                <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={
                    () => { setAction("Login") }}>Login</button>
            </div>
        </div>
    )
};

export default Login;
