import React, {useEffect, useState} from "react";

import './outdoors.scss';
import post from "../../post";
import Product from "../../components/products/product";

const Outdoors = () => {
    const [noItems,setNoItems] = useState(false);
    const [items,setItems] = useState([])
    useEffect(() => {
        post('http://localhost:8080/products/search',{
            category : 'outdoor'
        }).then(resp => {
            if (resp.data.err){
                console.log(resp.data.msg)
            }else{
                if (resp.data.r.length > 0){
                    setItems(resp.data.r)
                }else{
                    setNoItems(true)
                }
            }
        })
    })
    return(
        <div className={'electronics'}>
            {
                items.length > 0 && items.map((item,i) => {
                    return <Product product={item} key={i} />
                })
            }
            {
                noItems ? <div className={'alert alert-info'}>No Items Posted Under Outdoors Category</div> : ''
            }
        </div>
    )
}

export default Outdoors;