// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    return (
        <section className="skill" id="skills">
          <h5 className='title'>The Skills I Have</h5>
          <h2 className='title'>Skills</h2>
          <div className="container experience__container">
            <div className="experience__frontend">
              <h3>Front-end Development</h3>
              <div className="experience__content">
              <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>HTML</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>CSS</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>JavaScript</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>React</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Redux</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>SCSS</h4>
                </article>
               
              </div>
            </div>
            <div className="experience__backend">
              <h3>Back-end Development</h3>
              <div className="experience__content">
              <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Ruby</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Ruby on Rails</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>PostgreSQL</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Swagger</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>RSpec</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Git/GitHub</h4>
                </article>
              </div>
            </div>
          </div>
        </section>
      )
}