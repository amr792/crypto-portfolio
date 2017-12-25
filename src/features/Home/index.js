import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import {
  getCoins,
  retrieveCoins,
  searchCoins,
  isSearching,
  searching
} from "./home.reducer";
import CoinChart from "./CoinChart";

class Home extends Component {
  componentDidMount() {
    this.props.retrieveCoins();
  }
  render() {
    return (
      <div>
        {!this.props.isSearching ? (
          <h2>Loading...</h2>
        ) : (
          <Jumbotron>
            <CoinChart coins={this.props.coins} />
          </Jumbotron>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSearching: searching(state),
    coins: getCoins(state) || {}
  };
}
const mapDispatchToProps = {
  retrieveCoins,
  searchCoins,
  isSearching
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
