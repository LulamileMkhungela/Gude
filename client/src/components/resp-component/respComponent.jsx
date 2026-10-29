import React, {useEffect, useState} from "react";

import './respComponent.scss';

const RespComponent = ({err,msg}) => {
    const [display,setDisplay] = useState(true);
    const show = () => {
        setTimeout(() => {
            setDisplay(false);
        }, 3000)
    }
    useEffect(() => {
        show()
    },[])
    return(
        <div>
            { display ?
                    <div className={`resp-component ${err ? 'alert alert-success' : 'alert alert-danger'} `}>
                        <p>
                            {msg}
                            <i className={'fa fa-close'} onClick={()=>setDisplay(false)}> </i>
                        </p>
                    </div>
                    : ''
            }
        </div>
    )
}

export default RespComponent;