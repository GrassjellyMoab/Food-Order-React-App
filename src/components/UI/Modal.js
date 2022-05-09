import react from "react";
import reactDom from "react-dom";
// css
import classes from "./Modal.module.css";

// dark backdrop for modal
const Backdrop = props => {
    return <div className={classes.Backdrop} onClick={props.onClick}/>
}

// main modal overlay
const ModalOverlay = props => {
    return <div className={classes.modal}>
       {props.children}
    </div>
}

// get div element that we will portal the components into
const portalElement = document.getElementById("overlays");



const Modal = (props) => {
    return <react.Fragment>
        {reactDom.createPortal(<Backdrop onClick={props.onClose}/>, portalElement)};
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)};
    </react.Fragment>
}

export default Modal;