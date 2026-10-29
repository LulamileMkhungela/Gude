import React, { useState, useEffect } from "react"
import {useSelector} from "react-redux"

import './WishList.scss'
import WishListComp from '../../components/wish-list/WishListComp'
import post from "../../post";
import RespComponent from "../../components/resp-component/respComponent";

const WishList = () => {
    const _user_id = useSelector(state => state.userLoggedInData.userInfo.id)
    const [wishlist, setWishlist] = useState([])
    const [nowishlist, setNoWishlist] = useState(false)
    const [noWishlistMsg, setNoWishlistMsg] = useState('')
    const [showResp, setShowResp] = useState(false)

    useEffect(async () => {
        if (_user_id !== undefined){
            try {
                await post('http://localhost:8080/api/wishlist/all', {
                    _user_id: _user_id
                }).then(resp => {
                    if (resp.data.err) {
                        setShowResp(true)
                    } else {
                        if (resp.data.hasOwnProperty('count')) {
                            setNoWishlist(true)
                            setNoWishlistMsg(resp.data.msg)
                        } else {
                            console.log(resp.data.wish_list_data)
                            setWishlist(resp.data.wish_list_data)
                        }
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
    }, [_user_id])

    return (
        <div className={'cart-listing'}>
        {
            showResp ? <RespComponent err={false} msg={'Error Occurred Fetching Your wish list Items'}/> : ''
        }
        <div className={'row header'}>
            <div className={'col-lg-6 '}>
                <div className={'cart-listing-heading'}>
                    <p>My wish list</p>
                </div>
            </div>
            <div className={'col-lg-6 pd-10'}>
                <div className={'select-all'}><label>Select all</label>&nbsp;&nbsp;&nbsp;<input type={'checkbox'}/>
                </div>
            </div>
        </div>
        {
            nowishlist ? <div className={'alert alert-info'}><p>{noWishlistMsg}</p></div> : ''
        }
        {
            wishlist ? wishlist.map((wish, index) => {
                return <WishListComp wish={wish} key={index}/>
            }) : ''
        }
    </div>
    )
}

export default WishList;