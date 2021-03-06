import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className />
            <li data-target="#demo" data-slide-to={1} className="active" />
            <li data-target="#demo" data-slide-to={2} className />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active carousel-item-left">
              <img src="./img/slide_1.jpg" alt="Los Angeles" width="100%" height={500} />
            </div>
            <div className="carousel-item carousel-item-next carousel-item-left">
              <img src="./img/slide_2.jpg" alt="Chicago" width="100%" height={500} />
            </div>
            <div className="carousel-item">
              <img src="./img/slide_3.jpg" alt="New York" width="100%" height={500} />
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
