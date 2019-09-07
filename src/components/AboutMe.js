import React, { Component } from "react";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      selfClickCounter: 0,
      content: {
        headerText: "Meet Matthew Farmer.",
        paragraphOne:
          "I'm a full-stack web developer with a keen eye for design and a passion for developing applications to solve real-world problems. In addition to more than a year of experience with programming on both the front and back end, I possess more than five years of professional experience with creative problem solving (such as creating departmental knowledge repositories with search capability and writing code to determine refund amounts for thousands of accounts at a large bank).",
        paragraphTwo:
          "My higher education includes a Bachelor’s Degree in Business Management as well as the (pending) completion of the UNC Chapel Hill Coding Bootcamp. Technical skills include HTML/CSS, JavaScript, NodeJS, ReactJS, and database manipulation. Certified by the American Society of Quality in process improvement, I am highly skilled with process flowcharting (an invaluable tool in application development). In a collaborative environment, I enjoy teaching others and sharing my knowledge for the benefit of the team."
      }
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

  render() {
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
              <h3 class="mb-4">
                {this.state.content.headerText}
              </h3>
              <p>{this.state.content.paragraphOne}</p>
              <p id="extraAboutText">
                {this.state.content.paragraphTwo}
              </p>
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

export default AboutMe;
