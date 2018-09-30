import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { searchRobots } from "../actions/searchActions";
import { requestRobots } from "../actions/robotActions";

class Contact extends Component {
  componentDidMount = () => {
    this.props.onRequestRobots();
  };

  searchChangeHandler = event => {
    this.props.onSearchChange();
  };

  render() {
    const { isPending } = this.props;
    const { robots } = this.props.robot;
    const { searchField } = this.props.search;

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>LOADING...</h1>
    ) : (
      <div className="tc">
        <SearchBox onSearchChange={this.props.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  robot: state.robot,
  isPending: state.robot.isPending,
  err: state.robot.err
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(searchRobots(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
