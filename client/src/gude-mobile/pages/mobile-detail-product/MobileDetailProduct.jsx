import React, {useState} from "react";
import './mobileDetailProduct.scss';
import img from '../../../images/thinkpad.jpg';
import DetailProductDescription from "../../components/detail-product/detailProductDescription";
import HomeProduct from "../../components/mobile-product/homeProduct";
import MobileMsg from "../../components/detail-product/mobileMsg";

const MobileDetailProduct = () => {

    const [desc, setDesc] = useState(true);
    const [msg,setMsg] = useState(false)

    return (
        <div className={'mobile-product-detail'}>
            <div className={'mobile-product-detail-back bd'}>
                <i className="material-icons">arrow_back</i>
            </div>
            <div className={'mobile-product-detail-img bd'}>
                <img src={img} alt={''}/>
            </div>
            <div className={'detail-product-pro-img'}>
                <img src={img} alt={''}/>
            </div>
            <div className={'detail-info bd'}>
                <div className={'location-time'}>
                    <span>Ga-Rankuwa . 2 Hour ago</span>
                </div>

                <div className={'row product-name-price bd'}>
                    <div className={'col-xs-10 bd'}>
                        <span>Product Name</span>
                    </div>
                    <div className={'col-xs-2 bd'}>
                        <span>R300</span>
                    </div>
                </div>

                <div className={'h-detail-product-menu bd'}>
                    <ul className={''}>
                        <li onClick={() => {
                            setDesc(true)
                            setMsg(false)
                        }}>Description</li>
                        <li>Payment Methods</li>
                        <li onClick={() => {
                            setMsg(true)
                            setDesc(false)
                        }}>Messaging</li>
                        <li>More Items From Seller</li>
                    </ul>
                </div>

                {
                    desc ?
                        <>
                            <DetailProductDescription/>

                            <div className={'similar-product'}>
                                <div className={'list-header bd'}>
                                    <span>Similar Items</span>
                                    <i className="material-icons more-icon bd">chevron_right</i>
                                </div>
                                <div className={'home-listing bd'}>
                                    <ul>
                                        <li className={'bd'}>
                                            <HomeProduct />
                                        </li>

                                        <li className={'bd'}>
                                            <HomeProduct />
                                        </li>

                                        <li className={'bd'}>
                                            <HomeProduct />
                                        </li>

                                        <li className={'bd'}>
                                            <HomeProduct />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                        : msg ? <MobileMsg /> : ''
                }

            </div>
        </div>
    )
}

export default MobileDetailProduct;
