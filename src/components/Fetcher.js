import React, { Component } from "react";

class Fetcher extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = user => {
    let url = "/hit-db";
    fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log(results);
        console.log(results.length);
        this.setState({
          gatheredDbDocs: results
        });
      });
  };

  render() {
    return (
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
      <section onClick={this.props.cumulativeClicker} class="card mb-4 p-3">
        My state holds items fetched from the database!
      </section>
      /////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////
    );
  }
}

export default Fetcher;
