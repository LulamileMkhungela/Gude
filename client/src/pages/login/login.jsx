import React, {useState} from "react";
import imging from '../../images/logoNew/SocialGraphics (1).png';
import icon from '../../images/icon.jpeg';

import './login.scss';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import RespComponent from "../../components/resp-component/respComponent";
import {useSelector} from "react-redux";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


const Login = ({history}) => {
    const [errEmail, setErrEmail] = useState('')
    const [errPass, setErrPass] = useState('')
    const [showResp, setShowResp] = useState(false)
    const [err, setErr] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [success,setSuccess] = useState(false)

    const responseGoogle = async (response) => {

        try {
            const res = await axios.post('http://localhost:8080/auth/googlelogin', {tokenId: response.tokenId})
                console.log(res.data.data)
              history.push('/home')
        } catch (err) {
         
            
        }
    }
    const resGoogleError =async (response) => {
            console.log(response)
    }
    const responseFacebook =async (response) => {
       
        try {
            const {accessToken, userID} = response
            const res = await axios.post
            ('http://localhost:8080/auth/facebooklogin', {accessToken, userID})
            console.log(response.data.msg)
            setSuccess(true)
            localStorage.setItem('jwt', res.data.token)
            history.go(0)
            history.push('/home')
           } 
           catch (err) {
           console.log(err)  
           
          }
      }

    const isLoggedIn = useSelector(state => state.userLoggedInData.isLoggedIn)

    const login = async (e) => {
        e.preventDefault();
        await axios({
            url: 'http://localhost:8080/auth/login',
            method: 'POST',
            data: new FormData(document.getElementById('login-form')),
            withCredentials: true
        }).then(resp => {
            setShowResp(false)
            setErrEmail('')
            setErrPass('')
            if (resp.data.hasOwnProperty('validate')) {
                resp = resp.data.err;
                resp.forEach(el => {
                    if (el.param === 'email') {
                        setErrEmail('')
                        setErrEmail(el.msg)
                    }
                    if (el.param === 'password') {
                        setErrPass('')
                        setErrPass(el.msg)
                    }
                })
            } else {

                if (!resp.data.err) {
                    localStorage.setItem('jwt', resp.data.token)
                    setSuccess(true)
                    // setTimeout(() => {
                    //     history.go(0)
                    //     history.push('/home')
                    // }, 1000)
                }else{
                    setShowResp(true)
                    setErr(resp.data.err)
                    setErrMsg(resp.data.msg)
                }
            }
        }).catch(err => {
            console.log(err)
        })
    }
    /*
       If user is logged in they should not be allowed to browse to this page unless if the logout first
    */

    return (
        <div className={'login'}>
            {
                showResp ? <RespComponent err={!err} msg={errMsg}/> : ''
            }
            {/* {
                isLoggedIn ? <Redirect to={'/home'} /> : ''
            } */}

            <div className={'img-logo'}>
                <img src={imging} alt={'Login Image'}/>
            </div>
            <div className={'form'}>
                <form id={'login-form'}>
                    {
                        success ? <div className={'text text-success text-center'}>User Logged In Successfully</div> : ''
                    }
                    <br />
                    <div className={'login-icon'}>
                        <img src={icon} alt={'Login Icon'}/>
                    </div>

                    <br/>
                    <div className={'login-wel-msg'}><p>Welcome To Gude Marketplace</p></div>

                    <div className={'route-to-reg'}><p>Dont Have An Account? <Link to={'/register'}>Register</Link>
                    </p></div>

                    <br/>
                    <FacebookLogin  className={'btn btn-default fb-btn'}
                       buttonStyle={{height:'60px',padding:'10px',width:'50%'}}
                       appId="3198980513669068"
                       autoLoad={true}
                       fields="name,email,picture"
                       callback={responseFacebook} 
                       
                       icon="fa-facebook"
                    />
                     <GoogleLogin className={'google'}
                        
                        clientId="1065984606644-bp5svth1umfjg051loi9odk3th5n8sd9.apps.googleusercontent.com"
                        buttonText=" Login With Google "
                      
                        onSuccess={responseGoogle}
                        onFailure={resGoogleError}
                       
                    />
                    <br/>
                    <br/>
                    <br/>

                    <label>Email Address <span>{errEmail}</span> </label>
                    <input type={'email'} name={'email'} className={'form-control'} placeholder={'Email Address'}/>

                    <br/>

                    <label>Password <span>{errPass}</span> </label>
                    <input type={'password'} name={'password'} className={'form-control'} placeholder={'Password'}/>

                    <br/>
                    <div className={'forgot-password'}><Link to={'forgot'}>Forgot Password?</Link></div>
                    <br/>

                    <button onClick={e => login(e)} className={'btn btn-default login-btn'}>Login</button>
                    <br/>
                    <br/>
                    <br/>

                    <div className={'terms-conditions'}>
                        <p>By joining, you agree to the <Link to={''}>Terms</Link> and <Link to={''}>Privacy
                            Policy</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;