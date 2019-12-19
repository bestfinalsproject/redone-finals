import React from "react";
import './About.page.css'

const team = [
  {
    name: "Saruit Suwunrut",
    position: "Frontend/Backend"
  },
  {
    name: "Johnny Nguyen",
    position: "CSS extrodinaire"
  }
];

const About = () => (
  <div>
    <header className="bg-secondary text-center py-2 mb-4">
      <div className="container">
        <h1 className="font-weight-light text-white">Meet the Team</h1>
      </div>
    </header>
    <div className="container">
    <div className="row">
    {team.map(({ name, position }) => (
      
        
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/13715996_1233989286613423_8001312183027240155_n.jpg?_nc_cat=103&_nc_ohc=9G61NLAtxnkAQnLSF5oe251zsNdBeMLwrcI2IIJTp77iynV8SBxoTGlfw&_nc_ht=scontent-mia3-2.xx&oh=c9ef2e13760572eec3f2e902c18ecfc9&oe=5E871565"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{name}</h5>
                <div className="card-text text-black-50">{position}</div>
              </div>
            </div>
          </div>
       
      
    ))}
     </div>
    </div>
  </div>
);

export default About;
