import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

export const Skills = () => {
    return (
        <section className="skill" id="skills">
          <h5 className='title'>The Skills I Have</h5>
          <h2 className='title'>My Experience</h2>
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