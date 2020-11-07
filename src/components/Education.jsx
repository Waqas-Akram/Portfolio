import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Education = (props) => {
    return (
        <div >
            <Row>
                <Col md="4" lg="4">
                <p>{props.startYear} -- {props.endYear}</p>
                </Col>
                <Col md="8" lg="8" >
                    <h4 style={{marginTop:"8px"}}> {props.schoolName}</h4>
                        <p>{props.schoolDiscription}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Education
