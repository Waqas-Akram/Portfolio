import React from 'react';
import {Row , Col,Container} from 'react-bootstrap'
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import SchoolArray from './SchoolArray';
import Experience from './Experience';
import SkillArray from './SkillArray';
import Skills from './Skills';
const Resume = () => {
    return (
        <div className="resumeStyle">
            <Container>
           <Row>
               <Col lg="4" sm="12" md="4" xs="12">
               <PersonalInfo />
               </Col>
               <Col lg="8" sm="12" md="8" xs="12">
                   <div className="education">
               <h2>Education</h2>
              {SchoolArray.map(item =>{
                return <Education startYear={item.startYear}
                endYear={item.endYear}
                schoolName = {item.schoolName}
                schoolDiscription={item.schoolDiscription}
                />
              })
              }
              <hr style={{borderTop:"5px solid grey"}}/>
                <h2>Experience</h2>
                <Experience/>
                <hr style={{borderTop:"5px solid grey"}}/>
                <h2>Skills</h2>
               { SkillArray.map(skillItem=>{
                 return<Skills skill={skillItem.skill}
               progress={skillItem.progress}
               />
               }) 
               }
               </div>
               </Col>
           </Row>
           </Container>
        </div>
    )
}

export default Resume
