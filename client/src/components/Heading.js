import React from "react";
import styled from "styled-components";

//-----------------------------------------------------------

const Container = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Select = styled.select`
    padding: 1%;
    outline: none;
    border: 1px solid #ababab;
    border-radius: 5px 0 0 5px;
    background-color: #ededed;
`;

const Input = styled.input`
    padding: 1.1%;
    width: 70%;
    border: 1px solid #ababab;
    outline: none;
    border-radius: 0 5px 5px 0;
`;

const Button = styled.button`
    margin-left: 20px;
    padding: 1.1%;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #159930;
`;

//-----------------------------------------------------------

export default function Heading() {
    return (
        <Container>
            <Select name="Filters">
                <option selected hidden>
                    Filters
                </option>
                <option>Show all</option>
                <option>Open</option>
                <option>Closed</option>
            </Select>
            <Input type="text" placeholder="is:issue is:open" />
            <Button type="submit">New issue</Button>
        </Container>
    );
}
