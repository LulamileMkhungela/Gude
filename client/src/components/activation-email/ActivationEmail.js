import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import post from '../../post'

import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification';

const ActivationEmail=()=> {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                
                try {
                    const res = await axios.post('http://localhost:8080/auth/student/activate',{activation_token})
                     
                setSuccess(res.data.msg)
                    
                    
                } catch (err) {
                    setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token])

    return (
        <div className="active_page">
       
        <div>
        { showErrMsg(err)}
        </div>
        
          <div> 
          { showSuccessMsg(success)}
          </div>
        
            
           
            
        </div>
    )
}

export default ActivationEmail;