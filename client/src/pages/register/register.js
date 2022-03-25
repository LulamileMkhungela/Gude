import React, {useState} from "react";

import img from '../../images/login.jpg';
import icon from '../../images/icon.jpeg';

import './register.scss';
import {Link} from "react-router-dom";
import axios from "axios";
import RespComponent from "../../components/resp-component/respComponent";


const  Register = ({history}) => {

    const [err,setErr] = useState(false);
    const [msg,setMsg] = useState('');
    const [showResp,setShowResp] = useState(false)
    const [success,setSuccess] = useState(false)
    const [firstErr,setFirstErr] = useState('');
    const [lastErr,setLastErr] = useState('');
    const [emailErr,setEmailErr] = useState('');
    const [passErr,setPassErr] = useState('')
    const signup = (e) => {
        e.preventDefault();
        setShowResp(false)
        axios({
            url : 'http://localhost:8080/auth/signup',
            method : 'POST',
            data : new FormData(document.getElementById('signup-form')),
        }).then(resp => {
            setFirstErr('')
            setLastErr('')
            setEmailErr('')
            setPassErr('')
            if (resp.data.hasOwnProperty('validate')){
                resp = resp.data.err;
                resp.forEach(el => {
                    if (el.param === 'firstname'){
                        setFirstErr(el.msg)
                    }
                    if (el.param === 'lastname'){
                        setLastErr('')
                        setLastErr(el.msg)
                    }
                    if (el.param === 'email'){
                        setEmailErr('')
                        setEmailErr(el.msg)
                    }
                    if (el.param === 'password'){
                        setPassErr('')
                        setPassErr(el.msg)
                    }
                })
            }else{
                if (resp.data.err){
                    setErr(false)
                    setMsg(resp.data.msg)
                    setShowResp(true)
                }else{
                    setSuccess(true)
                    setTimeout(() => {
                        history.push('/login')
                    },2000)
                }
            }
        }).catch(err => {
            console.log(err.message)
        })
    }

    return(
        <div className={'register'}>
            {
                showResp ? <RespComponent err={err} msg={msg} /> : ''
            }

            <div className={'img-logo'}>
                <img src={img} alt={'Register Image'}/>
            </div>
            <div className={'form'}>
                <form id={'signup-form'}>
                    {
                        success ? <div className={'alert alert-success'}><p>Account Created Successfully</p></div> : ''
                    }
                    <div className={'register-icon'}>
                        <img src={icon} alt={'Register Icon'}/>
                    </div>
                    <br />
                    <div className={'register-wel-msg'}><p>Join Gude Marketplace</p></div>
                    <div className={'route-to-log'}><p>Already Have An Account? <Link to={'/login'}>Login</Link></p></div>
                    <br />
                    <button className={'btn btn-default fb-btn'}>Login With Facebook</button>
                    <br />
                    <br />
                    <br />
                    <div className={'row'}>
                        <div className={'col-lg-6 col-xs-12'}>
                            <label>Firstname <span>{firstErr}</span> </label>
                            <input type={'text'} name={'firstname'} placeholder={'Firstname'} className={'form-control first'}/>
                        </div>
                        <div className={'col-lg-6 col-xs-12 last'}>
                            <label>Lastname <span>{lastErr}</span></label>
                            <input type={'text'} name={'lastname'} placeholder={'Lastname'} className={'form-control'}/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <label>Email Address <span>{emailErr}</span></label>
                    <input type={'email'} name={'email'} className={'form-control'} placeholder={'Email Address'}/>
                    <br />
                    <label>Password <span>{passErr}</span></label>
                    <input type={'password'} name={'password'} className={'form-control'} placeholder={'Password'}/>
                    <br />
                    <br />
                    <button onClick={e=>signup(e)} className={'btn btn-default register-btn'}>Register</button>
                    <br />
                    <br />
                    <br />
                    <div className={'terms-conditions'}>
                        <p>By joining, you agree to the <Link to={''}>Terms</Link> and <Link to={''}>Privacy Policy</Link>.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;