import React, {useState} from "react";

import './addProduct.scss';
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

const AddProduct = ({history}) => {

    const [preview, setPreview] = useState(null);
    const [showPreview, setShowPreview] = useState(false)
    const [holdImg, setHoldImg] = useState(false);
    const [cash, setCash] = useState(false);
    const [payPal, setPayPal] = useState(false);
    const [visa, setVisa] = useState(false);
    const [neg, setNeg] = useState(false);
    const [showResp, setShowResp] = useState(false);
    const [err, setErr] = useState(false);
    const [msg, setMsg] = useState('');
    const [other, setOther] = useState(false)
    const userInfo = useSelector(state => state.userLoggedInData.userInfo)
    return (
        <div className={'add-mobile'}>
            <div className={'back-div'}>
                <i className="material-icons" onClick={() => history.goBack()}>arrow_back</i>
                <div className={' sell-heading'}>Item To Sell</div>
            </div>
            <form id={'sell-form'} encType={'multipart/form-data'}>
                <select
                    name={'category'}
                    className={'form-control'}
                    style={{height: '60px', borderRadius: '7px'}}
                    onChange={e => {
                        e.target.value === 'other' ? setOther(true) : setOther(false)
                    }}
                >
                    <option value={''}>Select Category</option>
                    <option value={'electronic'}>Electronics</option>
                    <option value={'freebie'}>Freebies</option>
                    <option value={'phone'}>Phones</option>
                    <option value={'book'}>Books</option>
                    <option value={'outdoors'}>Outdoors</option>
                    <option value={'Gaming'}>Gaming</option>
                    <option value={'appliance'}>Appliance</option>
                    <option value={'stationery'}>Stationery</option>
                    <option value={'health'}>Health & Beauty</option>
                    <option value={'other'}>Other</option>
                </select>
                <br/>
                {
                    other && <><input type={'text'} name={'other'} placeholder={'If Other, Enter Category'}
                                      className={'form-control'}/><br/></>
                }
                <input type={'file'}
                       className={'form-control'}
                       multiple={true}
                       accept={'image/*'}
                       name={'product_img_url'}
                       onChange={e => {

                           console.log(e.target.files)
                           setPreview(URL.createObjectURL(e.target.files[0]))
                           setShowPreview(true);
                           setHoldImg(true);
                           console.log(e.target.files)

                       }}
                />
                {showPreview ?
                    <div><br/><img src={preview} alt={''} className={'preview-img'}/><br/></div> : ''}
                <br/>
                <input name={'title'} type={'text'} className={'form-control'}
                       placeholder={'Enter Item Title'}/>
                <br/>
                <textarea name={'desc'} rows={4} className={'form-control'}
                          placeholder={'Enter Item Description'}/>
                <br/>
                <select name={'condition'} className={'form-control item-to-sell-category'}
                        style={{height: '60px', borderRadius: '7px'}}>
                    <option>Select Condition</option>
                    <option>New</option>
                    <option>Used</option>
                </select>
                <br/>
                <input name={'price'} type={'number'} className={'form-control'}
                       placeholder={'Type Your Price'}/>
                <br/>
                <input name={'quantity'} type={'number'} className={'form-control'}
                       placeholder={'Number Of Items'}/>
                <br/>
                <label>Payment Methods</label>
                <div className={'payment-method'}>
                                <span
                                    className={`bd ${cash ? 'active-span' : ''}`}
                                    onClick={() => setCash(!cash)}
                                >Cash</span>
                    <span
                        className={`bd ${payPal ? 'active-span' : ''}`}
                        onClick={() => setPayPal(!payPal)}
                    >PayPal</span>
                    <span
                        className={`bd ${visa ? 'active-span' : ''}`}
                        onClick={() => setVisa(!visa)}
                    >Visa</span>
                    <span
                        className={`bd ${neg ? 'active-span' : ''}`}
                        onClick={() => setNeg(!neg)}
                    >Exchange/Negotiate</span>
                </div>
                <br/>
                <div className={'item-btn'}>
                    <button className={'btn btn-default'}>Save As Draft</button>
                    <button className={'btn btn-default'}>Post</button>
                </div>

            </form>
        </div>
    )
}

export default withRouter(AddProduct);