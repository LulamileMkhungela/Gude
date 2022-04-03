
import defImag from '../../images/default_img.png';

import './topNav.scss';
import {useSelector} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import SearchModal from "../search-modal/searchModal";
import {useEffect, useState} from "react";
import post from "../../post";
const TopNav = ({history}) => {

    const _user_id = useSelector(state => state.userLoggedInData.userInfo.id)
    // const cartItemCount = useSelector(state => state.cart_count)
    const cartCount = useSelector(state => state.addToCart.count)
    const sellOnGude = async (e) => {
        e.preventDefault()
        await post('http://localhost:8080/auth/check-student',{
            _user_id : _user_id
        }).then(resp => {
            if (!resp.data.isStudent) {
                history.push('/student-register')
            }else{
                history.push('/add')
            }
        })
    }

    return(
        <div className={'top-nav-bg'}>
            {/*<SearchModal />*/}
            <div className={'top-nav'}>
                <div className={'row'}>
                    <div className={'col-lg-8 col-xs-12'}>
                        <table>
                            <thead>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input className={'form-control'}/></td>
                                <td>
                                    <select className={'form-control all-category'}>
                                        <option>All categories</option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={'col-lg-4 col-xs-12 right-nav'}>
                        <div className={'row'}>
                            <div className={'col-md-4 col-xs-12'}>
                                <button className={'btn btn-default'} onClick={e=>sellOnGude(e)}>
                                    <i className={'fa fa-send-o'}> </i><span>Sell On GUDE</span>
                                </button>
                            </div>

                            <div className={'col-md-8 col-xs-12'}>
                                <ul>
                                    <li>
                                        <NavLink to={'#'} activeClassName={'active-link'}>
                                            <i className={'fab fa-facebook-messenger'}> </i>
                                            <div className={'msg-badge'}><span>9</span></div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <i className="fa fa-bell"> </i>
                                        <div className={'msg-badge'}><span>9</span></div>
                                    </li>
                                    <li>
                                        <i className={'fa fa-heart'}> </i>
                                        <div className={'msg-badge'}><span>9</span></div>
                                    </li>
                                    <li>
                                        <NavLink to={'/cart'} activeClassName={'active-link'} activeStyle={{color : 'rgba(255,127,80, 1)'}}>
                                            <i onClick={()=>history.push('/cart')} className={'fa fa-shopping-bag'}> </i>
                                        </NavLink>
                                        {
                                            cartCount > 0 && cartCount <= 9 && <div className={'msg-badge'}><span>{cartCount}</span></div>
                                        }
                                        {
                                            cartCount > 9 && <div className={'msg-badge'}><span>{cartCount}+</span></div>
                                        }

                                    </li>
                                    <li><div className={'pro-img'} onClick={() => history.push('/profile')}><img src={defImag} alt={''}/></div></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(TopNav)