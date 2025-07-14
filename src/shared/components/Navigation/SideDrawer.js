import React from 'react';
import './SideDrawer.css';
import {CSSTransition} from 'react-transition-group';


const SideDrawer = props => {
    const content = (
    <CSSTransition in={props.show} 
    timeout={200} 
    classNames="slide-in-left" 
    mountontOnEnter 
    unmountOnExit   
    >
        <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
    );
    return React.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;