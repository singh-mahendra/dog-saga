import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import BreedsList from "./BreedsList";
import * as actionTypes from '../reducers/actionTypes';
import RouteMappings from '../components/RouteMappings';
import {BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
    componentDidMount() {
        this.props.loadAllBreeds();
    }

    render() {
    return (
      <div className="App">
          <Router>
            <RouteMappings/>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
        return {
          fetching: state.breeds.fetching
        }
      };

const mapDispatchToProps = dispatch => {return {
    loadAllBreeds: () => {dispatch({type: actionTypes.LOAD_BREEDS_API_REQUEST})}
}};

export default connect(mapStateToProps, mapDispatchToProps)(App);
