import React, { Component } from "react";
var createdApplications = require('./listOfApplications.json');

var appThumbnailStyle = {
  height: "200px",
};

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      selfClickCounter: 0,
      applications: createdApplications
    };
    this.tallySelfClicks = this.tallySelfClicks.bind(this);
  }

  tallySelfClicks() {
    var x = this.state.selfClickCounter;
    this.setState({ selfClickCounter: x + 1 });
  }

  componentDidUpdate() {
    //Allows state to change when prop is updated by parent
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  drawCards = argObj => (
    <div className="col-xl-4 col-md-6">
      <div className="card shadow mb-3">
        <h5 className='p-3'>{argObj.title}</h5>
        <img src={argObj.imagePath} style={appThumbnailStyle} />
        <div className="card-footer text-right">
          <a href={argObj.githubLink}>
            <i class="fab fa-github"></i>
          </a>
          <span> | </span>
          <a href={argObj.deployedLink}>
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );

  render() {
    const appsToShow = this.state.applications;
    if (this.state.visible) {
      return (
        /////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        <section onClick={this.props.cumulativeClicker} class="card mb-4">
          <subsection onClick={this.tallySelfClicks}>
            <div className="card-header text-right">
              <span class="badge badge-primary">
                {this.state.selfClickCounter}
              </span>
            </div>
            <div className="card-body">
              <div className="row">{appsToShow.map(this.drawCards)}</div>
            </div>
          </subsection>
        </section>
        /////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
      );
    } else {
      return null;
    }
  }
}

export default Applications;
