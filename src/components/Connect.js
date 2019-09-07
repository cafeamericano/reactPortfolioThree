import React, { Component } from "react";

const connectBlocksJSON = [
  {
    title: "Résumé",
    icon: "fas fa-file-invoice fa-5x",
    href:
      "https://drive.google.com/uc?export=download&id=1HOcFhOlveROqNYVoJIyTxzg6UWnjzxaY"
  },
  {
    title: "GitHub",
    icon: "fab fa-github fa-5x",
    href: "https://github.com/cafeamericano"
  },
  {
    title: "LinkedIn",
    icon: "fab fa-linkedin fa-5x",
    href: "https://www.linkedin.com/in/matthew-farmer-204930182"
  },
  {
    title: "Email",
    icon: "fas fa-envelope fa-5x",
    href: "#",
    text: "mfarmer5102@gmail.com"
  },
  {
    title: "Phone",
    icon: "fas fa-phone fa-5x",
    href: "#",
    text: "252-289-2937"
  }
];

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      selfClickCounter: 0,
      connectBlocks: connectBlocksJSON
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

  drawConnectBlocks = argObj => (
    <div className="col-xl-4 col-lg-4 col-xs-6">
      <div className="card shadow mb-3 text-center">
        <div className="p-3">
          <h5>{argObj.title}</h5>
        </div>
        <div className="p-3">
          <a href={argObj.href}>
            <i class={argObj.icon}></i>
          </a>
        </div>
      </div>
    </div>
  );

  render() {
    const connectBlocksToShow = this.state.connectBlocks;
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
              <div className="row">
                {connectBlocksToShow.map(this.drawConnectBlocks)}
              </div>
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

export default Connect;
