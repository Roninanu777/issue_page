import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "./components/Heading";
import Modal from "./components/Modal";

//Styles-------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  align-self: center;
`;

//-------------------------------------------------------------

function App() {
  const [term, setTerm] = useState("show-all");
  const [open, setOpen] = useState(false);

  let handleTerm = (term) => {
    setTerm(term);
  };

  let handleOpen = (open) => {
    setOpen(open);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Heading getTerm={handleTerm} getOpen={handleOpen} />
      {open ? <Overlay onClick={handleClose} /> : null}
      <Modal show={open} />
    </Container>
  );
}

export default App;
