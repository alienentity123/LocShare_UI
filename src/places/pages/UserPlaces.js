import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const Dummy_places = [
    {
        id:'p1',
        title: 'berkley',
        description : 'this is a trash college',
        imageURL: 'https://www.google.com/imgres?q=berkeley%20university&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa1%2FSeal_of_University_of_California%252C_Berkeley.svg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUniversity_of_California%2C_Berkeley&docid=VF-CosC-zZDa0M&tbnid=9t2slFS0LeoiFM&vet=12ahUKEwi9xaivqb2OAxU0ITQIHeFvF-gQM3oECHIQAA..i&w=666&h=666&hcb=2&ved=2ahUKEwi9xaivqb2OAxU0ITQIHeFvF-gQM3oECHIQAA' ,
        address: 'Harmon Way, Berkeley, CA 94720',
        coordinates: {
            lat: 37.8714023,
            lng: -122.2622038
        },
        creator: 'user1'

    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = Dummy_places.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces}/>
    );
};

export default UserPlaces;