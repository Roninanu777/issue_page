import React, { useState } from "react";
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
    background-color: #f7f7f7;
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
    outline: none;
    cursor: pointer;
    background-color: #156783;
`;

//-----------------------------------------------------------

export default function Heading(props) {
    const [value, setValue] = useState("filters");

    let handleChange = (e) => {
        setValue(e.target.value);
        props.getTerm(e.target.value);
    };

    let handleOpen = () => props.getOpen(true);

    return (
        <Container>
            <Select value={value} onChange={handleChange}>
                <option value="filters" hidden>
                    Filters
                </option>
                <option value="show-all">Show all</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
            </Select>
            <Input type="text" placeholder="is:issue is:open" />
            <Button type="button" onClick={handleOpen}>
                New issue
            </Button>
        </Container>
    );
}
