import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("accept");
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);

  const openModal = (modalText, modalTitle, type) => {
    setText(modalText);
    setTitle(modalTitle);
    setType(type);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ open, type, text, title, openModal, closeModal }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
