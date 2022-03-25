import React from 'react'

import './About.css'

function About() {
  return (
    <div className="about-container">
       <h3 className="about-intro">Introduction</h3>
            <form>
              <div className="form-control">
                <i class="fas fa-briefcase fa-lg"></i>
                <input className="input-control" type="text" />
              </div>
              <div className="form-control">
                <i class="fa fa-map-marker fa-lg"></i>
                <input className="input-control" type="text" />
              </div>
              <div className="form-control">
                <i class="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
                <input className="input-control" type="text" />
              </div>
              <div className="form-control">
                <i class="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
                <input className="input-control" type="text" />
              </div>
              <div className="form-control">
                <i class="fa fa-home fa-lg"></i>
                <input className="input-control" type="text" />
              </div>
              <div className="btn">
                <button>Save & Continue</button>
              </div>
            </form>
    </div>
  )
}

export default About
