import React,{useState} from 'react';
import {Container, Row , Col , Card , Button} from 'react-bootstrap';
const CardItem = (props) => {
  
    const{projectName,projectDiscription,imageUrl,gitLink} = props;
    const [mouse, setMouse]=useState(false);
    const mousedOver =()=>{
        setMouse(true);
    }
    const mousedOut =()=>{
        setMouse(false);
    }
    return (
      
      
        
        <div  >
 
                <Card className="cardStyle shadow  bg-white rounded">
  <Card.Img    src={imageUrl}  />
  <Card.Body>
    <Card.Title>{projectName}</Card.Title>
    <Card.Text >
      {projectDiscription}
    </Card.Text>
    <button className="cardButton "   style={{background:mouse?"#3498db":"white"}} onMouseOver={mousedOver} onMouseOut={mousedOut}><a style={{textDecoration:mouse?"none":null,color:mouse?"white":"#3498db"}} href={gitLink} target="_blank" onMouseOver={mousedOver} onMouseOut={mousedOut}>View on GitHub</a></button>
  </Card.Body>
</Card>
  <br/>
        </ div>
        
    )
}

export default CardItem
