import {useState, React} from 'react';
import {useParams} from 'react-router-dom'
import icon from '../../images/icon.jpeg';
import axios from 'axios';

import './forgot.css';

const Reset = () => {
    const {token} = useParams();
  

    const [password, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  

    const resetPasswordHandler = async (e) => {
         e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/auth/reset', {password}, {
                headers: {Authorization: token}
                
            })
            // return  res.data.msg
            console.log(res.data.msg);

        } catch (error) {
            console.log(error);
            
        }
    };
    return (

        <div className="forgot-com">


            <div className="forgot-form">

                <form onSubmit={resetPasswordHandler}>
                    <div className="wraps">
                        <img className="img-fpass" src={icon} alt="Welcome Gude"/>

                        <h3>Recover Account</h3>
                    </div>
                    <div className="containers">


                        <label> New Password </label><br/>
                        <input type="password" name="newpassword" autoComplete="true"
                               value={password}
                               onChange={(e) => setNewPassword(e.target.value)}/><br/>
                        <label> confirm Password </label><br/>
                        <input type="password" name="confirmpassword" autoComplete="true"
                               value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}/><br/>


                        <button className="btn" onClick={resetPasswordHandler}>Reset Password</button>


                    </div>


                </form>

            </div>

        </div>
    );

}

export default Reset;