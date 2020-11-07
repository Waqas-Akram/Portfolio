import React from 'react';
import {Row ,Col,ListGroup ,Container,Image } from 'react-bootstrap';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
function Contact(){
    
    return(
        <div className="contact-body">
            <Container>
            <Row >
                <Col sm="6" lg="6" md="6">
                <Image style={{marginTop:"20px"}} src="../Images/contact.gif" fluid/>
                </Col>
                <Col sm="6" md="6" lg="6">
                    <h2>Personal Contact</h2>
                    <div className="contact-list">

   
  <a href="https://wa.me/923044608401"><WhatsAppIcon style={{color:"#00E676",fontSize:"50px"}}/></a>
  <a href="tel:03167062394"><PhoneIcon style={{color:"#00E676",fontSize:'50px'}}/></a>
   
  <a href="mailto:waqasakram512@outlook.com"><MailIcon style={{color:"#006EC0" ,fontSize:'50px'}}/></a>
   <a href="mailto:waqasassasin@gmail.com"> <MailOutlineIcon style={{color:"#C75047" ,fontSize:'50px'}}/></a>
   <br/>
   <br/>
   <br/>
   </div>
   <h2>Social Contact</h2>
   <div className="contact-list">
       <a href="https://web.facebook.com/waqasassasin/"><FacebookIcon style={{ fontSize:'50px'}}/></a>
        <a href="https://twitter.com/Waqas__Akram"><TwitterIcon style={{color:"#1A91DA" ,fontSize:'50px'}}/></a>
        <a href="https://www.instagram.com/waqas___akram/"><InstagramIcon style={{color:"#f2003c" ,fontSize:'50px'}}/></a>
        <a href='https://github.com/Waqas-Akram'><GitHubIcon style={{color:"#7C007C" ,fontSize:'50px'}}/></a>
        </div>

                </Col>
            </Row>
            </Container>
            
        </div>
    )
}
export  default Contact;