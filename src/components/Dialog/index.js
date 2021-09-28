import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { ModalContext } from "../../providers/dialogModal";

const AlertDialog = () => {
  const { open, text, title, closeModal, secondaryButton } =
    useContext(ModalContext);

  return (
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Fechar</Button>
        {secondaryButton}
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
