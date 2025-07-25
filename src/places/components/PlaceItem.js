import React, {useState, useContext}from 'react';
import './PlaceItem.css';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import {AuthContext} from '../../shared/context/auth-context';


const PlaceItem = props => {
    const auth = useContext(AuthContext);

    const [showMap, setShowMap] = useState(false);

    const[showConfirmModal, setShowConfirmModal] = useState(false)

    const openMapHandler = () => {
        setShowMap(true);
    };

    const closeMapHandler = () => {
        setShowMap(false);
    };

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false)
    };

    const confimDeleteHandler = () => {
        setShowConfirmModal(false)
        console.log("deleting...")
    };



    return (
    <React.Fragment>
        <Modal show={showMap} 
        onCancel={closeMapHandler} 
        header={props.address} 
        contentClass="place-item__modal-content" 
        footerClass="place-item__modal-actions" 
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
            <div className = "map-container">
                <h2>The Map</h2>
            </div>
        </Modal>
        <Modal 
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header = "Do you want to Delete?" 
        footerClass="place-item__modal-actions" 
        footer={
            <React.Fragment>
                <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                <Button danger onClick={confimDeleteHandler}>Delete Permanently</Button>
            </React.Fragment>
        }>
            <p>Are you sure you would like to proceed? PLEASE NOTE YOU CAN'T UNDO THIS ACTION.</p>
        </Modal>
        <li className="place-item">
            <Card className="place-item__content">
            <div classname="place_item__image">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                <Button inverse onClick={openMapHandler}>
                    View on Map
                </Button>
                {auth.isLoggedIn &&
                <Button to={`/places/${props.id}`}>
                    Edit
                </Button>
                }
                {auth.isLoggedIn && 
                <Button danger onClick={showDeleteWarningHandler}>
                    Delete
                </Button>
                }                       
            </div>
            </Card>
        </li>;
        </React.Fragment>
        );
    };


export default PlaceItem;
