import React from 'react'
import {Row,Col,Image} from 'react-bootstrap';
const Expertise = (props) => {
    return (
        <div>
           
           <Image src={props.imgUrl} style={{marginTop:"30px"}} roundedCircle />
        </div>
    )
}

export default Expertise
