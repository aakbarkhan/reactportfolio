import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Booking an Appointment.",
      description: "Making an appointment with Doctor. Used  Ruby, Ruby on Rails, PostgreSQL, Bootstrap and JavaScript.",
      imgUrl: projImg1,
      live: "",
      github: "https://github.com/aakbarkhan/Appointment-app-backend",
    },
    {
      title: "metrics-webapp",
      description: "This app shows the covid infection cases in different countries and can search with country names. Used React, Redux, Html & CSS, and JavaScript.",
      imgUrl: projImg2,
      live: 'https://coviid.netlify.app/',
      github: 'https://github.com/aakbarkhan/metrics-webapp',
    },
    {
      title: "Budget App",
      description: "The Budget app. Used Ruby, Ruby on Rails, PostgreSQL, JavaScript.",
      imgUrl: projImg3,
      live: 'https://bajat.herokuapp.com/',
      github: 'https://github.com/aakbarkhan/budget-app'
    },
    {
      title: "Sea Foods App",
      description: "This app is about adding likes and comments to sea foods. Used React, HTML&CSS and  JavaScript.",
      imgUrl: projImg4,
      live: 'https://aakbarkhan.github.io/Cfood/dist/',
      github: 'https://github.com/aakbarkhan/Cfood'
    },
    {
      title: "TECHNOLOGY SUMMIT",
      description: "Hello! Sharing world CREATIVE GLOBAL TECHNOLOGY SUMMIT 2021. Capstone poroject for HTML & CSS and  JavaScript",
      imgUrl: projImg5,
      live: 'https://aakbarkhan.github.io/capstone-project/index.html',
      github: 'https://github.com/aakbarkhan/capstone-project'
    },
    {
      title: "Bookstore",
      description: "It is about adding books with their category and used api created using Ruby on Rails.",
      imgUrl: projImg6,
      live: 'https://angry-bassi-da3bfc.netlify.app/',
      github: 'https://github.com/aakbarkhan/bookstore'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem .</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="section">Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}