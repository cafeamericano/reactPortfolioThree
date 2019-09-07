//IMPORTS=========================================================================================================================================================

import React, { Component } from "react";

//Child components
import Fetcher from "./Fetcher";
import AboutMe from "./AboutMe";
import Applications from "./Applications";
import Connect from "./Connect";

//STYLING=========================================================================================================================================================

//NAME, STATE, AND BINDING=========================================================================================================================================================

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0,
      subComponentVisibilityToggler: {
        AboutMe: true,
        Applications: true,
        Connect: true
      }
    };
    this.tallyCumulativeClicks = this.tallyCumulativeClicks.bind(this);
    this.toggleVisibilityForAll = this.toggleVisibilityForAll.bind(this);
  }

  //LIFECYCLE METHODS=========================================================================================================================================================

  //SELF METHODS=========================================================================================================================================================

  //When tallyCumulativeClicks is called, do the following
  tallyCumulativeClicks() {
    const total = this.state.totalClicks;
    this.setState({ totalClicks: total + 1 });
  }

  toggleVisibilityForAll() {
    if (this.state.subComponentVisibilityToggler.AboutMe) {
      this.setState({
        subComponentVisibilityToggler: {
          AboutMe: false,
          Applications: false,
          Connect: false
        }
      });
    } else {
      this.setState({
        subComponentVisibilityToggler: {
          AboutMe: true,
          Applications: true,
          Connect: true
        }
      });
    }
  }

  //RENDER=========================================================================================================================================================

  render() {
    return (
      <div className="p-3">
        <div onClick={this.toggleVisibilityForAll} class="text-right mb-3">
          <i class="fas fa-eye-slash fa-2x"></i>
        </div>
        <div class="alert alert-secondary" role="alert">
          Total Clicks Across All Components: {this.state.totalClicks}
        </div>
        <Fetcher></Fetcher>
        <AboutMe
          visibility={this.state.subComponentVisibilityToggler.AboutMe}
          cumulativeClicker={this.tallyCumulativeClicks}
        ></AboutMe>
        <Applications
          visibility={this.state.subComponentVisibilityToggler.Applications}
          cumulativeClicker={this.tallyCumulativeClicks}
        ></Applications>
        <Connect
          visibility={this.state.subComponentVisibilityToggler.Connect}
          cumulativeClicker={this.tallyCumulativeClicks}
        ></Connect>
      </div>
    );
  }
}

//Export class AllEntriesList to be used by App.js
export default Main;
