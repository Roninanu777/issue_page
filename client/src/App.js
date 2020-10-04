import React from "react";
import styled from "styled-components";

//Styles-------------------------------------------------------
const Container = styled.div`
    width: 50%;
    padding: 3%;
    background-color: red;
`;
//-------------------------------------------------------------

function App() {
    return (
        <Container>
            <h1>Issue list</h1>
        </Container>
    );
}

export default App;
