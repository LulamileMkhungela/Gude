import React, {useState} from "react";

import img from '../../images/logoNew/SocialGraphics (1).png';
import cover from '../../images/student_cover.png';
import defaultImg from '../../images/pro_pic.png';

import './student.scss';
import {Link} from "react-router-dom";
import post from "../../post";
import {useSelector} from "react-redux";
import RespComponent from "../../components/resp-component/respComponent";

const Student = () => {
    const userId = useSelector(state => state.userLoggedInData.userInfo.id)

    const [emailErrMsg, setErrEmailMsg] = useState('')
    const [contactErrMsg, setContactErrMsg] = useState('')
    const [locationErrMsg, setLocationErrMsg] = useState('')

    const [showResp, setShowResp] = useState(false)
    const [respErr,setRespErr] = useState(false)
    const [respMsg,setRespMsg] = useState('')
    const [successMsg,setSuccessMsg] = useState('')

    const registerStudent = async (e) => {
        e.preventDefault()
       if(userId !== 'undefined'){
        const formData = new FormData(document.getElementById('student-form'))
        formData.append('_user_id', userId)
        setErrEmailMsg('')
        setContactErrMsg('')
        setLocationErrMsg('')
        setShowResp(false)
        await post('http://localhost:8080/auth/signup/student', formData).then(resp => {
            if (resp.data.hasOwnProperty('validate')) {
                resp = resp.data.errData
                resp.forEach(el => {
                    if (el.param === 'student_email') {
                        setErrEmailMsg(el.msg)
                    }
                    if (el.param === 'contact') {
                        setContactErrMsg(el.msg)
                    }
                    if (el.param === 'location') {
                        setLocationErrMsg(el.msg)
                    }
                })
            }else{
                if (resp.data.err){
                    setShowResp(true)
                    setRespErr(false)
                    setRespMsg(resp.data.msg)
                }else{
                    setSuccessMsg(resp.data.msg)
                }
            }
        })
       }
    }

    return (
        <div className={'be-student'}>
            {
                showResp ? <RespComponent err={respErr} msg={respMsg} /> : ''
            }
            <div className={'img-logo'}>
                <img src={img} alt={'Be Student Image'}/>
            </div>
            <div className={'student'}>
                <div className={'student-cover-photo'}>
                    <img src={cover} alt={'Student Cover Image'}/>
                </div>
                <div className={'student-pro-img'}>
                    <img src={defaultImg} alt={'Student Profile Image'}/>
                </div>
                <br/>
                <br/>
                {/*<div className={'student-change-btn'}>*/}
                {/*    <button className={'btn btn-default'}>Change</button>*/}
                {/*</div>*/}
                <br/>
                <br/>
                <br/>
                <form id={'student-form'}>
                    <span className={'text text-success text-center'}>{successMsg} <br /> <br /></span>
                    <div className={'row'}>
                        <div className={'col-lg-6'}>
                            <label>Phone Number <span
                                className={'text text-danger'}> {contactErrMsg}</span></label>
                            <input type={'tel'} name={'contact'} placeholder={'Phone Number'}
                                   className={'form-control'}/>
                        </div>
                        <div className={'col-lg-6'}>
                            <label>Alternative Number</label>
                            <input type={'tel'} name={'alt_contact'} placeholder={'Alternative Number'}
                                   className={'form-control'}/>
                        </div>
                    </div>
                    <br/>
                    <label>Student Email <span className={'text text-danger'}> {emailErrMsg}</span></label>
                    <input type={'email'} name={'student_email'} placeholder={'Student Email'}
                           className={'form-control'}/>
                    <br/>
                    <label>Location <span className={'text text-danger'}> {locationErrMsg}</span></label>
                    <input type={'tel'} name={'location'} placeholder={'Location'} className={'form-control'}/>
                    {/*<br />*/}
                    {/*<label>Payment Methods</label>*/}
                    {/*<div className={'payment-methods'}> </div>*/}
                    <br/>
                    <br/>
                    <button className={'btn btn-default'} onClick={(e) => registerStudent(e)}>Save & Continue
                    </button>
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

export default Student