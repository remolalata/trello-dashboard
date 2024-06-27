import React from "react";

import { Dialog, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';

interface ModalProps {
    open: boolean,
    handleClose?: any,
    title?: string
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Modal: React.FC<ModalProps> = ({
    open,
    handleClose,
    title
}) => {
    return (
        <Dialog
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{title}</DialogTitle>
        </Dialog>
    )
}

export default Modal;