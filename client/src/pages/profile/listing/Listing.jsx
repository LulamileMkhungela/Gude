import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Listing.css'
import img from '../../../images/img.png'
import profilePic from '../../../images/pro_pic.png'
import { useSelector } from 'react-redux'

function Listing() {
    const [see, setSee] = useState(true);
    const [currentIndex,setCurrentInde] = useState(0);

    setTimeout(() => {
        setCurrentInde(currentIndex + 1)
    }, 3000)

    const userLoggedInId = useSelector(state => state.userLoggedInData.userInfo.id)
    const [listing, setListing] = useState([1, 2, 3, 4, 5]);
    const fetchedProducts = useSelector(state => state.productData.products);


    const products = fetchedProducts.filter(product => product.user_info._id === userLoggedInId)

    const categories = new Set();

    for(let product of products){

        categories.add(product.product_info.category)

    }

    console.log(categories.size);

    useEffect(() => {
        axios.get('')
    }, [categories])


    return (
        <>
            {
                // categories.forEach((category, index) => {

                    products.length> 0 && products.map((product, i) => {
                        return <div className="listing-container" key={i}>
                            <div className="listing-top-container">
                                <h5 className="listing-h5-text">{product.product_info.category}</h5>
                                <button className="listing-see-link" onClick={() => setSee(!see)}>See more</button>
                            </div>
                            <div className="listing-holder-container">
                                <div className="listing-1st-child">
                                   <img src={product.product_info.product_img_url[0]} alt="" className="listing-image"/>

                                    
                                </div>
                                <div className="listing-2nd-child">
                                    {/** fetch the product name from the database */}
                                    <h5 className="listing-h5">{product.product_info.title}</h5>
                                    {/** fetch the status of a product from the database */}
                                    <p className="listing-status">{product.product_info.quantity}<span>{product.product_info.condition}</span></p>
                                    {/** fetch SKU number from the database */}
                                    <p className="listing-sku">SKU number: 09403049305t4863</p>
                                    {/** fetch the location from the database */}
                                    <p className="listing-location">Location: Johannessburg</p>
                                    {/** fetc the image, name and surname in the database */}
                                    <div className="listinig-profile">
                                        <img src={profilePic} alt="" className="listing-profile-image"/>
                                        <p className="listing-fornames">{product.user_info.firstname + " " + product.user_info.lastname}</p>
                                    </div>
                                    <hr/>
                                    <p className="listing-description">Description</p>
                                    <hr/>
                                    {/** information about products */}
                                    <p className="listing-information">{product.product_info.desc}</p>
                                </div>
                            </div>
                        </div>
                    })
                    
                // })

            }
        </>
            )
}

export default Listing
