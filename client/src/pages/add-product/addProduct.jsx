import React, {useState} from "react";

import './addProduct.scss';
import axios from "axios";

import image from '../../assets/img.png';
import image_1 from '../../assets/img_1.png';
import image_2 from '../../assets/img_2.png';
import RespComponent from "../../components/resp-component/respComponent";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

const AddProduct = ({history}) => {
    const [preview, setPreview] = useState(null);
    const [showPreview, setShowPreview] = useState(false)
    const [holdImg, setHoldImg] = useState(false);
    const [cash, setCash] = useState(false);
    const [payPal, setPayPal] = useState(false);
    const [visa, setVisa] = useState(false);
    const [neg, setNeg] = useState(false);
    const [showResp,setShowResp] = useState(false);
    const [err,setErr] = useState(false);
    const [msg,setMsg] = useState('');
    const [other,setOther] = useState(false)
    const userInfo = useSelector(state => state.userLoggedInData.userInfo)

    const post = async (e) => {
        console.log(userInfo.id)
        e.preventDefault()
        const formData = new FormData(document.querySelector('#sell-form'))
        formData.append('_user_id', userInfo.id)
        setShowResp(false)
        await axios({
            url: 'http://localhost:8080/products/sell',
            method: 'POST',
            data: formData
        }).then(resp => {
            if (!resp.data.err){
                setShowResp(true)
                setErr(!resp.data.err)
                setMsg(resp.data.msg)
                setTimeout(() => {
                    history.push('/home')
                }, 1000)
            }
        })
    }
    // const validateISBN = (e) => {
    //     axios({
    //         url : 'https://api2.isbndb.com/book/9781934759486' ,
    //         method : 'GET',
    //         headers : {
    //             'User-Agent': 'insomnia/5.12.4',
    //             'Accept': '*/*',
    //             'Authorization': 'YOUR_REST_KEY'
    //         }
    //     }).then(resp=>{
    //         if (resp.data.hasOwnProperty('book')){
    //             console.log('ISBN validated')
    //         }else{
    //             console.log('Not Validated')
    //         }
    //     })
    // }
    return (
        <div>
            {
                showResp ? <RespComponent err={err} msg={msg} /> : ''
            }
            <div className="panel-default item-to-sell">
                <div className={'row'}>
                    <div className={'col-lg-6'}>
                        {/*<h5>{user}</h5>*/}
                        <br/>
                        <div className={'item-to-sell-heading'}>Item To Sell</div>
                        <form id={'sell-form'} encType={'multipart/form-data'}>
                            <select
                                name={'category'}
                                className={'form-control'}
                                style={{height: '60px', borderRadius: '7px'}}
                                onChange={e=>{
                                    e.target.value === 'other' ? setOther(true) : setOther(false)
                                }}
                            >
                                <option>Select Category</option>
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
                                other && <><input type={'text'} name={'other'} placeholder={'Category'} className={'form-control'}/><br /></>
                            }
                            <input type={'file'}
                                   className={'form-control'}
                                   multiple={true}
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
                            <input name={'price'} type={'text'} className={'form-control'}
                                   placeholder={'Type Your Price'}/>
                            <br/>
                            <input name={'quantity'} type={'number'} className={'form-control'}
                                   placeholder={'Number Of Items'}/>
                            <br/>
                            <input name={'location'} type={'text'} className={'form-control'} placeholder={'Location'}/>
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
                                <button onClick={e => post(e)} className={'btn btn-default'}>Post</button>
                            </div>

                        </form>
                    </div>

                    <div className={'col-lg-6 sell-holder'}>
                        <img src={holdImg ? preview : image} alt={''} className={'sell-holder-image bd'}/>
                        <br/>
                        <br/>
                        <div className={'sell-pop-values'}>
                            <p>Item Title : </p>
                            <p>Price : </p>
                            <p>Description : </p>
                            <p>Number Of Items : </p>
                            <p>Condition : </p>
                            <p>Location : </p>
                            <img src={image_1} alt={''} className={'map-image'}/>
                            <br/>
                            <br/>
                            <p><span style={{
                                fontSize: '17px',
                                fontWeight: 'bolder',
                                color: 'black'
                            }}>Seller Info</span></p>

                            <div className={'sell-info'}>
                                <div className={'row'}>
                                    <div className={'col-lg-2'}>
                                        <img src={image_2} alt={''} className={'seller-img'}/>
                                    </div>
                                    <div className={'col-lg-10 seller-name'}>
                                        Kamzen Makamu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(AddProduct);