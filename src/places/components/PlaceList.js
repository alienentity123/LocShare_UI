import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

import Button from '../../shared/components/FormElements/Button';


const PlaceList = props => {
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Places found. Please create one instead</h2>
                    <Button to="/places/new">

                    </Button>
                </Card>
            </div>
        );
    }

    return <ul className="place-list">
        {props.items.maps(place => <PlaceItem 
        key={place.id} 
        id={place.id} 
        image ={place.imageURL} 
        title={place.title} 
        description={place.description} 
        address={place.address} 
        creatorID={place.crator} 
        coordinates={place.location}
        />
    )
        }
    </ul>;

};

export default PlaceList;
