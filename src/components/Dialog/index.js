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

export default function AlertDialog() {
  const { open, type, text, title, closeModal } = useContext(ModalContext);

  return (
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Fechar</Button>
        {type === "accept" && (
          <Button onClick={closeModal} autoFocus>
            Aceito
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
