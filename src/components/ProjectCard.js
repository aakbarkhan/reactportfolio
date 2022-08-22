import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, live, github }) => {
  return (
    <Col size={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
            <div>
                <button className="btn">
                  <a className="live" href={live} target="_blank" rel="noopener noreferrer">
                  See Live
                  </a>
                </button>
                <button className="btn">
                  <a className="live" href={github} target="_blank" rel="noopener noreferrer">See Source</a>
                </button>
            </div>
        </div>
      </div>
    </Col>
  )
}