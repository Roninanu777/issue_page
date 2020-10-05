import React from "react";
import styled from "styled-components";
import Heading from "./components/Heading";

//Styles-------------------------------------------------------
const Container = styled.div`
    padding: 3%;
    background-color: #f7f7f7;
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
