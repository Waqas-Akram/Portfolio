import React,{useState} from 'react';
import {Container, Row, Col,Image} from 'react-bootstrap';
import JumbotronHeader from './JumbotronHeader';
import Expertise from './Expertise';
import ExpertiseArray from './ExpertiseArray';
const Home = () => {
    const [mouse, setMouse]=useState(false);
    const mousedOver =()=>{
        setMouse(true);
    }
    const mousedOut =()=>{
        setMouse(false);
    }
    return (
        <>
       <JumbotronHeader
       title="MERN Stack Web Developer"
       discription="Myself is a  junior web developer and I am enthusiast to explore new ideas and creative in web designs.My expertise included MERN Stack which will be listed bellow"
       buttonName="Explore Resume"
       addressLink="./resume"
       className="jumbotronHeader2 shadow  bg-white rounded"
       />
       <div>
       <h1 className="display-3 expertise ">Expertise</h1>
       <Container>
           <Row>
           {ExpertiseArray.map(exp=>{
               return<Col sm="6" xs="6" lg="2" md="2"><Expertise
               imgUrl={exp.imgUrl}
               /></Col>
           })}
           </Row>
       
       </Container>
       </div>
        </>
    )
}

export default Home
