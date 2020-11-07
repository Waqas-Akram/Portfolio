import React,{useState} from 'react'
import { Container, Jumbotron, Image } from 'react-bootstrap';

const JumbotronHeader = (props) => {
    const [mouse, setMouse]=useState(false);
    const mousedOver =()=>{
        setMouse(true);
    }
    const mousedOut =()=>{
        setMouse(false);
    }
    return (
        <div>

            <Jumbotron className={props.className} fluid>
  <Container>
    <h1 class="display-3">{props.title}</h1>
 <span><p>{props.discription}</p></span>
    <button className="cardButton" style={{background:mouse?"#3498db":"white",color:mouse?"white":"#3498db"}} onMouseOver={mousedOver} onMouseOut={mousedOut}><a href={props.addressLink} style={{color:mouse?"white":"#3498db",textDecoration:mouse?"none":"null"}} onMouseOver={mousedOver} onMouseOut={mousedOut}>{props.buttonName}</a></button>
  <Image src={props.imageLink} fluid/>
  </Container>
</Jumbotron>
        </div>
    )
}

export default JumbotronHeader
