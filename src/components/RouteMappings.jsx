import {Route} from 'react-router-dom';
import React from 'react';
import BreedsList from "../containers/BreedsList";
import BreedDetails from "../containers/BreedDetails";

export default function (params) {
    return(
        <div>
            <Route path="/breeds/:breedName" component={BreedDetails}/>
            <Route exact path="/breeds" component={BreedsList}/>
        </div>
    )
}
