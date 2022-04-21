import React from 'react'
import  { Link, useHistory } from 'react-router-dom'
import { CgProfile } from "react-icons/cg"
import { MdLogout } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'

import defImag from '../../../images/default_img.png'
import './UserProfile.css'
import { logout } from '../../../states/user-loggedin-info/fetchUserInfoAction'

const UserProfile = ({ collapse, setCollapse, _user_id  }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.userLoggedInData.userInfo)

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/')
    }

  return (
    <div className="profile-menu">
        <div className="profile-action" onClick={() => setCollapse(!collapse)}>
            <img src={defImag} alt={''}/>
        </div>
        {collapse && (<div className="profile-profile-menu">
             <div className="profile-prof">
                 <img src={defImag} alt={''} />
                 <div className="info">
                     <h2>{ userInfo.firstname /*+ ' ' + userInfo.lastname*/ }</h2>
                 </div>
             </div>
             <ul>
                 <li>
                    <Link to="/profile" className="profile-btn">
                        <CgProfile className="profile-icon"/>
                        Profile
                    </Link>
                 </li>
                 <li>
                     <button className="profile-btn" onClick={logoutHandler}>
                        <MdLogout className="profile-icon" />
                         Logout
                    </button>
                 </li>
             </ul>
             
        </div>)}
    </div>
  )
}

export default UserProfile

//<div className={'pro-img'} onClick={() => history.push('/profile')}><img src={defImag} alt={''}/></div>