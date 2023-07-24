// About.js
import React from 'react';
import './style1.css';

const About = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-30">
            <div className="section-title">
              <span>Makeup Artist</span>
              <h2>Stylista Book</h2>
            </div>
            <p>Hello, we! love making people feel beautiful, and  have spent the last 10 years immersed in the world of Makeup &amp; Hair Styling.</p>
            <p className="mb-60">Makeup viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabi elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</p>
            <div className="row">
              <div className="col-md-6 mb-30">
                <div className="about-img">
                  <div className="img">
                    <img src="https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-img">
                  <div className="img">
                    <img src="https://images.pexels.com/photos/3738359/pexels-photo-3738359.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="about-img">
              <div className="img">
                <img src="data:image/jpeg;base64,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" className="img-fluid" alt="" />
              </div>
              <div className="about-img-2 about-buro">Belen Ava / Makeup Artist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;