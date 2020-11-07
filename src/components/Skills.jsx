import React from 'react';
import {Row,Col , ProgressBar} from 'react-bootstrap';

const Skills = (props) => {
    return (
        <div>
            <Row>
                <Col md="6" lg="6" sm="6" xs="10">
               <p  > {props.skill} <ProgressBar animated now={props.progress} /></p>
                </Col>
            </Row>

        </div>
    )
}

export default Skills
