import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "./components/Heading";
import Modal from "./components/Modal";

//Styles-------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  return (
    <Container>
      <Heading getTerm={handleTerm} getOpen={handleOpen} />
      <Modal />
    </Container>
  );
}

export default App;
