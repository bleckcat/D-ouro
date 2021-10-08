import React from "react";
import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const [secondaryButton, setSecondaryButton] = useState(null);

  const openModal = (modalText, modalTitle, element) => {
    setText(modalText);
    setTitle(modalTitle);
    setSecondaryButton(element);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        text,
        title,
        secondaryButton,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
