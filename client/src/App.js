import React from "react";
import styled from "styled-components";
import Heading from "./components/Heading";

//Styles-------------------------------------------------------
const Container = styled.div`
    width: 100%;
`;
//-------------------------------------------------------------

function App() {
    return (
        <Container>
            <Heading />
        </Container>
    );
}

export default App;
