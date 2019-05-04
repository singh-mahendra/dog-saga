import React from 'react';
import {connect} from "react-redux";
import List from '../components/List'
import {Link} from "react-router-dom";
import * as actionTypes from "../reducers/actionTypes";
const BreedsList = (props) => {
    //const ItemLink = <Link to={`/breeds/${item}`}>{item}</Link>;
    const ItemLink = (item) => <Link to={`/breeds/${item}`} onClick={props.selectBreed.bind(this, item)}>{item}</Link>;
    return <List items={props.breeds} link = {ItemLink}/>;
};

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds.allBreeds
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        selectBreed: (selectedBreed) => dispatch({type: actionTypes.SELECT_BREED, selectedBreed})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BreedsList);
