import React from 'react';
import {connect} from 'react-redux';

const BreedDetails = (props) =>{
    return <div>
        <span>Name:{props.selectedBreed}</span>
        <ul>
            {props.selectedBreedDogs.map((dog) =>{
                return <li><img src={dog}/></li>
            })}
        </ul>
    </div>
};

const mapStateToProps = (state) =>{return {
    selectedBreed: state.breeds.selectedBreed,
    selectedBreedDogs: state.breeds.selectedBreedDogs,
}};

export default connect(mapStateToProps)(BreedDetails);
