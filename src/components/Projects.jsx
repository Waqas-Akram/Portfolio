import React from 'react'
import CardItem from './Card';
import ProjectsArray from './ProjectsArray';
import {Container,Row, Col,Jumbotron,Image} from 'react-bootstrap';
import JumbotronHeader from './JumbotronHeader';
const Projects = () => {
    return (
        <div>
            <JumbotronHeader className="jumbotronHeader shadow  bg-white rounded " 
            title="Projects and their Source Code"
            discription="Here is some kind of projects.Github repository  
            link of every project is listed with their specific card. Please visit that and explore new ideas "
            buttonName="Github Profile"
            addressLink="https://github.com/Waqas-Akram"
            />
            <Container>
            <Row>
          {  ProjectsArray.map(project =>{
                return <Col md="4"><CardItem
                projectName={project.projectName}
                projectDiscription={project.projectDiscription}
                imageUrl={project.imageUrl}
                gitLink={project.gitLink}
                /></Col>
            })}
            </Row>
            </Container>
        </div>
    )
}

export default Projects
